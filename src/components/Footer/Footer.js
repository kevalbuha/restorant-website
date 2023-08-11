import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-white">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top bg-dark text-light">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use href="#bootstrap"></use>
            </svg>
          </Link>
          <span className="text-white">© 2022 GoFood, Inc</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
