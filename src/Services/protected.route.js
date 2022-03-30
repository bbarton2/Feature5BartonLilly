import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import HeaderModule from "../Components/Header/Header";
// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  const history = useHistory();
  const goBackHandler = () => {
    history.push('/register');
  };
  console.log("rest", rest); // show rest.path in the console
  // you could redirect back to /auth if the flag is not true
  return (
    <div>
      <HeaderModule />
      {flag ? (
        <Redirect to={rest.path} />
      ) : (
        <div>
          <p>You Do Not Have An Account Please Resiter Here!</p> 
          <br /><button onClick={goBackHandler}>Go Register.</button>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;
