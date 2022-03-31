import React, { useEffect, useState } from "react";
import { logIn } from "../../Services/auth.service";
import LoginForm from "./LoginForm";
import HeaderModule from "../Header/Header";
import { useHistory } from "react-router";



const LoginModule = () => {

  const history = useHistory(); //in the future will want to clear history so that we can successfully log out users
  //creating the user to have attributes, email and password

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //set flags
  const [add, setAdd] = useState(false);
  

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (user && add) {
      console.log("user in Login.js", user)
      logIn(user).then((userLoggedIn) => {
        history.push("/loginhome") //redirects us to home page after trying to log in
        setAdd(false);
      });
    }
  }, [user, add]);

const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue); //button handler for logging in

    setUser({
      ...user,
      [name]: newValue
    });
  };

const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };



  return (
    <div>
        <HeaderModule />
        {/* Calling on the Login form to the login module */}
        <LoginForm
            user={user}
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
        />
    </div>
  );
};

export default LoginModule;
