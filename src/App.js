import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { React, useState, useEffect } from "react";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import AuthContext from "./auth-context";

const dummy_items = [
  {
    id: "1",
    productname: "Double cheeseburger",
    productdescripton:
      "Two 100% pure beef burger patties seasoned with just a pinch of salt and pepper. It's topped with tangy pickles, chopped onions, ketchup, mustard and two slices of melty American cheese.",
    price: "$ 10",
    quantity: 1,
  },
  {
    id: "2",
    productname: "Chicken nuggets",
    productdescripton:
      "Small piece of deboned chicken meat that is breaded or battered, then deep-fried or baked",
    price: "$ 5",
    quantity: 1,
  },
  {
    id: "3",
    productname: "Egg McMuffin",
    productdescripton:
      "Freshly cracked Grade A egg on a toasted English Muffin topped with real butter and add lean Canadian beef and melty American cheese",
    price: "$ 7",
    quantity: 1,
  },
];

function App() {
  const [products, setProducts] = useState(dummy_items);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {  ------------------------
  //   const storedUserLoggedInInformation = localStorage.getItem("LoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setLogin(true);
  //   }
  // }, []);
  // console.log(products);
  useEffect(() => {
    if (
      localStorage.getItem("foodapp-email") &&
      localStorage.getItem("foodapp-password")
    ) {
      setSignup(true);
      if (localStorage.getItem("isLoggedIn")) {
        setLogin(true);
      }
    }
  }, [setSignup, setLogin]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // setSignup(true);
    setLogin(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    localStorage.removeItem("LoggedIn");
    setSignup(false);
  };

  const signupHandler = (name, email, password) => {
    setSignup(true);
    setName(name);
    setUsername(email);
    setPassword(password);
    localStorage.setItem("foodapp-name", name);
    localStorage.setItem("foodapp-email", email);
    localStorage.setItem("foodapp-password", password);
  };

  return (
    <AuthContext.Provider
      value={{
        name: name,
        username: username,
        password: password,
        setSignup: setSignup,
        setLogin: setLogin,
      }}
    >
      <div className="container-fluid">
        <Header />
        <div className="container toppad">
          {!signup && <Signup onNewEntry={signupHandler} />}
          {signup && !login && <Login onExistingEntry={loginHandler} />}
          {signup && login && <Home item={products} />}
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
