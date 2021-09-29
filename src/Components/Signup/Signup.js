import React from "react";
import "./Signup.css";
import SignupForm from "./SignupForm";

const Signup = (props) => {
  const signupHandler = (name, email, password) => {
    // console.log(name, "in signup");
    // console.log(email, "in signup");
    // console.log(password, "in signup");
    props.onNewEntry(name, email, password);
  };

  return (
    <div className="row middle">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Sign Up</h2>
            <p> </p>
            <SignupForm onSignUp={signupHandler} />
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
