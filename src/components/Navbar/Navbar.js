import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Model from "../../model/Model";
import Cart from "../../Screens/Cart";
import { useCart } from "../ContextReducer/ContextReducer";

function Navbar() {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("authtoken");
    navigate("/login");
  };
  let data = useCart();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFooD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authtoken") ? (
              <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/"
                  >
                    My Order
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authtoken") ? (
              <div className="d-flex gap-2">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>

                <Link className="btn bg-white text-success mx-1" to="/signup">
                  SignUp
                </Link>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <div
                  className="btn bg-white text-success mx-r"
                  onClick={() => setCartView(true)}
                >
                  Cart<span className="badge badge-danger ml-2">{data.length}</span>
                </div>
                {cartView ? <Model onClose={()=>{setCartView(false)}}><Cart/></Model> : null}
                <div
                  className="btn bg-white text-success mx-r"
                  onClick={handleLogOut}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
