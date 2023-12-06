import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/ContextReducer";
import Modal from "../Modal";
import Cart from "../screens/Cart";

export default function Navbar() {

  let history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    history("/");
  };

  const data = useCart();
  const [cartView, setCartView] = useState(false);
  const loadCart = () => {
    setCartView(true)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-5 fw-bold fst-italic" to="/">
            FoodApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="flex-end mx-2">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-end">
                {localStorage.getItem("authToken") ? (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link active mx-1"
                        aria-current="page"
                        to="/myOrders"
                      >
                        My Orders
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="btn btn-primary active me-4 position-relative"
                        aria-current="page"
                        onClick={loadCart}
                      >
                        My Cart
                        {
                          data.length ===0 ?
                           " "
                          :
                          <>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              {data.length}
                            </span>
                          </>
                        }
                      </button>
                    </li>
                    {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                    <li className="nav-item">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link
                        className="btn btn-outline-primary mx-2"
                        aria-current="page"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="btn btn-outline-primary mx-2 "
                        to="/signup"
                      >
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
