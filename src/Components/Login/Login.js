import React from "react";
import "./Login.css";
import LoginForm from "./LoginForm";

const Login = (props) => {
  const loginHandler = (email, password) => {
    props.onExistingEntry(email, password);
  };

  return (
    <div className="row middle">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <p> </p>
            <LoginForm onLogin={loginHandler} />
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
