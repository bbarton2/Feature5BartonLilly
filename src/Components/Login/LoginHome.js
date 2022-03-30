import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Services/protected.route";
import LoginGood from "./LoginGood";
import Parse from "parse"
import HeaderModule from "../Header/Header";
import LoginForm from "./LoginForm";
import LoginModule from "./Login"
//import { onChangeHandler, onSubmitHandler } from "./Login"


const LoginHome = () => {
  const [flag, setFlag] = useState(false);
  console.log("Here in LoginHome");
  let user = Parse.User.current();
  let urlName = "/user/";

  console.log("User is: ", user);
  //console.log("Authentication", user.authenticated);

  let check = false;

  if (user && user.authenticated) {
    console.log("AUTHENTICATED!");
    urlName = urlName + user.attributes.email;
    check = true;
  }

  useEffect(() => {
    if (check) {
      console.log("GOOD");
      setFlag(true);
    } else {
      console.log("BAD");
      setFlag(false);
    }
  }, [check]);
  // In this case the flag is acquired through a check box but it could also be received from other methods
  // What is a Parse.User method that would help here?

  return (
    <div>
      <HeaderModule />
        <LoginForm
            user={user}
            onChange={LoginModule.onChangeHandler}
            onSubmit={LoginModule.onSubmitHandler}
        />
      <ProtectedRoute
        exact
        path={urlName}
        flag={flag}
        component={LoginGood}
      />
    </div>
  );
};

export default LoginHome;
