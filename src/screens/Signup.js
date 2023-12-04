import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../hooks";

export default function Signup() {

    const history = useNavigate();
    const auth = useAuth();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
    const [cpassword, setCpassword] = useState("")

    const handleSubmit =async( e) =>{
        e.preventDefault();
        let response = await auth.signup(name,email,location,cpassword);
        if(!response.name){
            history('/');
        }
        else{
            history('/signup');
            setName("");
            setEmail("");
            setCpassword("");
            setLocation("");
        }
    }

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-center mt-5">Signup Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              onChange={(e)=> setName(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
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
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              onChange={(e)=> setLocation(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Create Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              name="cpassword"
              onChange={(e)=> setCpassword(e.target.value)}
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
