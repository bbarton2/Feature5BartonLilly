import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Parse from "parse";
import HeaderModule from "../Header/Header";
import { useHistory } from "react-router-dom";

const LoginGood = () => {
  //set the user to the current user state
  let user = Parse.User.current();

  // to go back redirect to home. 
  const history = useHistory();
  const goBackHandler = () => {
    history.push('/home');
  };
  //if the user is a authenticated then send to this page which 
  //is a protected route. 
  if (user && user.authenticated) {
      return <div>
        <HeaderModule />
        {user.attributes.email}  
        <hr /> 
        Will add the page that will let them add specials 
        <br /> <br />  
        <button onClick={goBackHandler}>Home.</button>
      </div>;
    
  }

};

export default LoginGood;
