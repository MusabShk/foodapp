import React, { useContext, useState } from "react";
import AuthContext from "../../auth-context";

const Navbar = () => {
  const ctx = useContext(AuthContext);

  const signoutHandler = () => {
    localStorage.removeItem("foodapp-name");
    localStorage.removeItem("foodapp-email");
    localStorage.removeItem("foodapp-password");
    localStorage.removeItem("isLoggedIn");
    ctx.setSignup(false);
    ctx.setLogin(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    ctx.setLogin(false);
  };

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <h3>
          <span className="badge bg-primary">Food App</span>
        </h3>
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
        <ul className="nav justify-content-center">
          {(ctx.username.length > 0 ||
            localStorage.getItem("foodapp-email")) && (
            <li className="nav-item">
              <a className="nav-link" onClick={signoutHandler}>
                Signout
              </a>
            </li>
          )}
          {localStorage.getItem("isLoggedIn") && (
            <li className="nav-item">
              <a className="nav-link" onClick={logoutHandler}>
                Logout
              </a>
            </li>
          )}

          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
