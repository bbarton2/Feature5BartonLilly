import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Services/protected.route";
import LoginGood from "./LoginGood";
import Parse from "parse"


const LoginHome = () => {
  const [flag, setFlag] = useState(false);

  //check to see if the user is authenticated and then 
  //set flag based on that 
  useEffect(() => {
    let user = Parse.User.current();
    if (user && user.authenticated) {
      console.log("GOOD");
      setFlag(true);
    } else {
      console.log("BAD");
      setFlag(false);
    }
  }, []);
  
  //if authenitcated send to this protected route
  return (
    <div>
      <ProtectedRoute
        exact
        path="/user/"
        flag={flag}
        component={LoginGood}
      />
    </div>
  );
};

export default LoginHome;
