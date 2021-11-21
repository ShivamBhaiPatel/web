import React from "react";
import { NavLink } from "react-router-dom";
import './Home.css';
import web from "../../images/11.gif";
import About from "../About/About";
import Service from "../Gallery/Gallery";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="container">
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid row">
            <div className="col-12 mx-auto">
                <div className="col-md-8 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <p className="brand-name">
                      Society for the Public Advancement & Reign the Knowledge
                      (SPARK){" "}
                    </p>
                  </h1>
                  <p className="my-3">
                    To remove educational backwardness , and create awareness
                    about the national ideals of JUSTICE , LIBERTY , EQUALITY
                    AND FRATERNITY , SECULARISM and SOCIALISM.
                  </p>
                  <div className="mt-03 text-center">
                    <NavLink to="/about" className="btn-get-started">
                      Know More
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-4 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid "
                    alt="common image"
                  />
                </div>
              </div>
        </div>
      </section>
      {/* <div className="container">
        <About />
        <img
          class="image-divider text-center"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/101448/wedding-divider-png-9.png"
        />
      </div>
      <div className="container">
        <Service />
      </div>
      <div className="container">
        <Contact />
      </div> */}
    </div>
  );
};
export default Home;
