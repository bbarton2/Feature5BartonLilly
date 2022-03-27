import React from "react";
import { Link } from "react-router-dom";
import AuthRegister from "./AuthRegister";
import HeaderModule from "../Header/Header";

const AuthModule = () => {
  return (
    <div>
        <HeaderModule />
        <AuthRegister />
    </div>
  );
};

export default AuthModule;
