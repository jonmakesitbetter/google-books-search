import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
        </div>
    );
};

export default Navbar;