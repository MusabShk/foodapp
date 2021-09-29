import React, { useEffect, useRef, useState } from "react";
import "./SignupForm.css";

const SignupForm = (props) => {
  const emailFocus = useRef();
  const passwordFocus = useRef();

  const [name, setName] = useState("");

  const [email, setEmail] = useState({
    emailLabel: true,
    validEmail: null,
    enteredEmail: "",
  });
  const [password, setPassword] = useState({
    passwordLabel: true,
    validPassword: null,
    enteredPassword: "",
  });

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail((prevState) => {
      return { ...prevState, enteredEmail: event.target.value };
    });
  };

  const passwordChangeHandler = (event) => {
    setPassword((prevState) => {
      return { ...prevState, enteredPassword: event.target.value };
    });
  };

  const validateEmail = () => {
    if (email.enteredEmail.length > 0) {
      setEmail((prevState) => {
        return { ...prevState, validEmail: true };
      });
    }
  };
  const validatePassword = () => {
    if (password.enteredPassword.length > 5) {
      setPassword((prevState) => {
        return { ...prevState, validPassword: true };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (email.validEmail && password.validPassword) {
      setEmail((prevState) => {
        return { ...prevState, emailLabel: true };
      });
      setPassword((prevState) => {
        return { ...prevState, passwordLabel: true };
      });
      //   console.log(email.enteredEmail);
      //   console.log(password.enteredPassword);
      //   console.log(name);
      props.onSignUp(name, email.enteredEmail, password.enteredPassword);
    } else if (!email.validEmail) {
      setEmail((prevState) => {
        return { ...prevState, emailLabel: false };
      });
      setPassword((prevState) => {
        return { ...prevState, passwordLabel: true };
      });
      emailFocus.current.focus();
    } else {
      setEmail((prevState) => {
        return { ...prevState, emailLabel: true };
      });
      setPassword((prevState) => {
        return { ...prevState, passwordLabel: false };
      });
      passwordFocus.current.focus();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={nameChangeHandler}
          value={name}
        />
      </div>
      <div className={`${email.emailLabel ? "" : "red"} mb-3`}>
        <label className="form-label">Email address *</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={emailChangeHandler}
          value={email.enteredEmail}
          onBlur={validateEmail}
          ref={emailFocus}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className={`${password.passwordLabel ? "" : "red"} mb-3`}>
        <label className="form-label">Password *</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={passwordChangeHandler}
          value={password.enteredPassword}
          onBlur={validatePassword}
          ref={passwordFocus}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
