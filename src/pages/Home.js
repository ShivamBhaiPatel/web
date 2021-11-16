import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/11.gif";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common 
              name="Grow your bussiness with"
              imgsrc={web}
              visit="/contact"
              btname="Get Started"/>
    </>
  );
};
export default Home;
