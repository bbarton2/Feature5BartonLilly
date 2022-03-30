import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Parse from "parse";
import HeaderModule from "../Header/Header";
import { useHistory } from "react-router-dom";

const LoginGood = () => {

  let user = Parse.User.current();

  /*If either of these if statements failed, the user likely
  /attempted to manually type in a user url*/
  const history = useHistory();
  const goBackHandler = () => {
    history.push('/home');
  };
  if (user && user.authenticated) {
      return <div>
        <HeaderModule />
        {user.attributes.email}  <hr /> Will add the page that will let them add specials 
        <br /> <button onClick={goBackHandler}>Home.</button>
        </div>;
    
  }

};

export default LoginGood;
