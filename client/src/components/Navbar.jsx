import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Saved"
              >
                Journal Entry
              </Link>
            </li>
          </ul>
        </div>
        </div>
    );
};

export default Navbar;