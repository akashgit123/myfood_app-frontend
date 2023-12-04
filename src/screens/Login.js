import React,{useState} from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";

export default function Login() {

  const history = useNavigate();
    const auth = useAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit =async(e) =>{
        e.preventDefault();
        let response =await auth.login(email,password);
        if(response.success){
          localStorage.setItem("authToken",response.authToken)
          history('/');
          setEmail("");
          setPassword("");
        }
        else{
          history('/signup');
        }
    }


  return (
    <>
    <Navbar />
    <div className="container">
      <form onSubmit={handleSubmit}>
      <h2 className="text-center mt-5">Login Page</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={(e)=> setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
