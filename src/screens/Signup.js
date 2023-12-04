import React from "react";
import Navbar from "../components/Navbar";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-center mt-5">Signup Page</h2>
        <form>
          <div className="mb-3">
            <label for="email" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Create Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
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
