import React, { useEffect, useState } from "react";
import { createUser } from "../../Services/auth.service";
import AuthForm from "./AuthForm";
import Parse from "parse";
import { link, useParams } from "react-router-dom";

const AuthRegisterModule = () => {
  
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
        }
        // TODO: redirect user to main app
        setAdd(false);
      });
    }
  }, [newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
    //console.log("Here's users");
    //console.log(Parse.user.getUsers());
  };

  return (
    <div>
        <AuthForm
            user={newUser}
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
        />
    </div>
  );
};

export default AuthRegisterModule;
