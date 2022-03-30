import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Parse from "parse";
import HeaderModule from "../Header/Header";
const LoginGood = () => {

  let user = Parse.User.current();
  
  /*If either of these if statements failed, the user likely
  /attempted to manually type in a user url*/
  if (user && user.authenticated) {
      return <div>
        <HeaderModule />
        Will add the page that will let them add specials 
        </div>;
    
  }

  return (
    <div>
      <HeaderModule />
      <Redirect to="/home" />
    </div>
  );
};

export default LoginGood;
