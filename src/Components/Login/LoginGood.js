import React from "react";
import { Link, useParams } from "react-router-dom";

// You must make sure to check this protected route even when manually typing in url
// or you can easily bypass the auth
const LoginGood = () => {
  const { firstname, lastname } = useParams();
  return (
    <div>
      <h1>
        {" "}
        User: {firstname} {lastname}{" "}
      </h1>
      <button>
        <Link to="/register">Go back.</Link>
      </button>
    </div>
  );
};

export default LoginGood;