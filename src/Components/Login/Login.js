import React, { useEffect, useState } from "react";
import { logIn } from "../../Services/auth.service";
import LoginForm from "./LoginForm";
import HeaderModule from "../Header/Header";
import { useHistory } from "react-router";
//import Parse from "parse";


const LoginModule = () => {
  const history = useHistory();
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
        if (userLoggedIn){
          history.push("/loginhome")
        }
        setAdd(false);
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
  };



  return (
    <div>
        <HeaderModule />
        <LoginForm
            user={user}
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
        />
    </div>
  );
};

export default LoginModule;
