import React, { useEffect, useState } from "react";
import { logIn } from "../../Services/auth.service";
import LoginForm from "./LoginForm";
import HeaderModule from "../Header/Header";
import ProtectedRoute from "../../Services/protected.route";
import LoginGood from "./LoginGood";
//import Parse from "parse";


const LoginModule = () => {
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [flag, setFlag] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (user && add) {
      console.log("user", user)
      logIn(user).then((userLoggedIn) => {
        // TODO: redirect user to main app
        setAdd(false);
        setFlag(false)
      });
    }
  }, [user, add]);

const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setUser({
      ...user,
      [name]: newValue
    });
  };

const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
    //console.log("Here's users");
    //console.log(e.target);
  };

  return (
    <div>
        <HeaderModule />
        <LoginForm
            user={user}
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
        />
        {/* <ProtectedRoute
        exact
        path = "/home"
        flag={flag}
        component={LoginGood}
      /> */}
    </div>
  );
};

export default LoginModule;
