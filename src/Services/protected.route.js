import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import HeaderProtectedModule from "../Components/Header/HeaderProtected";
import Parse from "parse";

const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  const history = useHistory();
  const goBackHandler = () => {
    //note that register is our auth files 
    history.push('/register');
  };
  // change the url to be personalized to the user
  // for the protected route 
  return (
    <div>
      <HeaderProtectedModule />
      {flag ? (
        <Redirect to={rest.path+Parse.User.current().attributes.email} /> 
        // dynamic path for redirect that uses parse
      ) : (
        // if you are not a registered get directed to the register page.
        <div>
          <p>You Do Not Have An Account Please Resiter Here!</p> 
          <br /><button onClick={goBackHandler}>Go Register.</button>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;
