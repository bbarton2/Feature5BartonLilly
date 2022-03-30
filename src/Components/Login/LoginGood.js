import React from "react";
import { Link, useParams } from "react-router-dom";
import HeaderModule from "../Header/Header"
// You must make sure to check this protected route even when manually typing in url
// or you can easily bypass the auth
const LoginGood = () => {
  const { email } = useParams();
  console.log("In logingood");
  return (
    <div>
      <HeaderModule />
      <h1>
        {" "}
        User: {email} {" "}
      </h1>
      <button>
        <Link to="/login">Go back.</Link>
      </button>
    </div>
  );
};

export default LoginGood;