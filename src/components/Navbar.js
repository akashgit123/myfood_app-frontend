import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand fs-5 fw-bold fst-italic" to="/">FoodApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
      </ul>
      <div className='flex-end mx-2'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-end">
        <li className="nav-item">
          <Link className="btn btn-outline-primary mx-2" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-primary mx-2" to="/signup">Signup</Link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
