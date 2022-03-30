import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Services/protected.route";
import LoginGood from "./LoginGood";
import Parse from "parse"


const LoginHome = () => {
  const [flag, setFlag] = useState(false);
  
  let urlName = "/user/";

  useEffect(() => {
    let user = Parse.User.current();
    if (user && user.authenticated) {
      console.log("isUserAuth", user);
      console.log("GOOD");
      setFlag(true);
      urlName = urlName + user.attributes.email;
      console.log("urlname",urlName)
    } else {
      console.log("BAD");
      setFlag(false);
    }
  }, []);
  // In this case the flag is acquired through a check box but it could also be received from other methods
  // What is a Parse.User method that would help here?

  return (
    <div>
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
