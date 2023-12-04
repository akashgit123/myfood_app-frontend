import React,{useState} from "react";
import Navbar from "../components/Navbar";

export default function Login() {

    const [user, setUser] = useState({name:"",email:"",password:"",location:""})
    const onchange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value});
    }

  return (
    <>
    <Navbar />
    <div className="container">
      <form>
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
            onChange={onchange}
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
            onChange={onchange}
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
