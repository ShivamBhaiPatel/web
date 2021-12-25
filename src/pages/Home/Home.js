import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../../images/11.gif";
// import web from "../../images/spark.jpg";
import web from "../../images/s1.jpg";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import HomeSection from "./HomeSection";
import Managingbody from "./Managingbody";

const Home = () => {
  return (
    <div className="container">
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto m-5">
              <div className="row">
                <div className="col-md-5 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column home-img">
                  <h1>
                    Society for the Public Advancement & Reign the Knowledge (
                    <strong className="brand-name">SPARK</strong>)
                  </h1>
                  <h5 className="my-3">
                    To remove educational backwardness , and create awareness
                    about the national ideals of JUSTICE , LIBERTY , EQUALITY
                    AND FRATERNITY , SECULARISM and SOCIALISM.
                  </h5>
                  <div className="mt-03">
                    <NavLink to="about" className="btn-get-started">
                      About Us
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-7 order-2 order-lg-2 header-img">
                  <img src={web} className="img-fluid" alt="common image" />
                  
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <HomeSection />
          </div>

          <div className="mbody">
            <Managingbody />
          </div>
          <div className="mbody">
            <Managingbody />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
