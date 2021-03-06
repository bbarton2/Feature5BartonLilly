import React from "react";
import SpecialList from "../Specials/SpecialList";
import HeaderModule from "../Header/Header";


/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const Home = () => {
  return (
    <div>
      <HeaderModule />
      <SpecialList />
    </div>
  );
};

export default Home;