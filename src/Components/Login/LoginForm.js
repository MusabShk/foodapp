import React, { useEffect, useRef, useState } from "react";
import "./LoginForm.css";
import Alert from "../UI/Alert";

const LoginForm = (props) => {
  const [incorrect, setIncorrect] = useState({
    incorrectEmail: false,
    incorrectPassword: false,
  });
  const emailFocus = useRef();
  const passwordFocus = useRef();

  //   const [name, setName] = useState("");

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

  //   const nameChangeHandler = (event) => {
  //     setName(event.target.value);
  //   };

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
      if (
        localStorage.getItem("foodapp-email") === email.enteredEmail &&
        localStorage.getItem("foodapp-password") === password.enteredPassword
      ) {
        setEmail((prevState) => {
          return { ...prevState, emailLabel: true };
        });
        setPassword((prevState) => {
          return { ...prevState, passwordLabel: true };
        });
        setIncorrect((prevState) => {
          return {
            ...prevState,
            incorrectEmail: false,
            incorrectPassword: false,
          };
        });
        props.onLogin(email.enteredEmail, password.enteredPassword);
        // console.log(email.enteredEmail);
        // console.log(password.enteredPassword);
      } else if (localStorage.getItem("foodapp-email") != email.enteredEmail) {
        setEmail((prevState) => {
          return { ...prevState, emailLabel: false };
        });
        setPassword((prevState) => {
          return { ...prevState, passwordLabel: true };
        });
        emailFocus.current.focus();
        setIncorrect((prevState) => {
          return {
            ...prevState,
            incorrectEmail: true,
            incorrectPassword: false,
          };
        });
      } else {
        setEmail((prevState) => {
          return { ...prevState, emailLabel: true };
        });
        setPassword((prevState) => {
          return { ...prevState, passwordLabel: false };
        });
        passwordFocus.current.focus();
        setIncorrect((prevState) => {
          return {
            ...prevState,
            incorrectEmail: false,
            incorrectPassword: true,
          };
        });
      }
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
      <div className={`${email.emailLabel ? "" : "red"} mb-3`}>
        <label className="form-label">Email address *</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={emailChangeHandler}
          value={email.enteredEmail}
          onBlur={validateEmail}
          ref={emailFocus}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
        <div className="row">
          {incorrect.incorrectEmail && <Alert text={"Incorrect Email"} />}
        </div>
      </div>
      <div className={`${password.passwordLabel ? "" : "red"} mb-3`}>
        <label className="form-label">Password *</label>
        <input
          type="password"
          className="form-control"
          onChange={passwordChangeHandler}
          value={password.enteredPassword}
          onBlur={validatePassword}
          ref={passwordFocus}
        />
        <div className="row">
          {incorrect.incorrectPassword && <Alert text={"Incorrect Password"} />}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
