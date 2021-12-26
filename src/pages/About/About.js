import React from "react";
import './About.css';
import { NavLink } from "react-router-dom";
import web from "../../images/logo-animated.gif";

const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto m-5">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2>
                    <strong className="brand-name"> About Us </strong>
                  </h2>
                  <hr />
                  <p className="my-3">
                    Society for the Public Advancement & Reign the Knowledge (SPARK) was established in the year 2019
                    for welfare and education of the people by the members of Anjuman BAZM-E-MUHAMMADI Dalaltola,
                    Jalalpur, under the patronage of Mr MAHBOOB AMHAD and Mr. RAFIQUE AHMAD. It is registered
                    under the societies registration act 1860.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <div className="header-img m-4">
                    <img
                      src={web}
                      className="img-fluid animated"
                      alt="common image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto">
              <div className="row">

                <div className="col-lg-6 order-1 order-lg-1">
                  <div className="header-img m-4">
                    <img
                      src={"https://cdn.dribbble.com/users/538090/screenshots/4420086/media/7d44fa6a2328ca997211665c549423fd.gif"}
                      className="img-fluid animated"
                      alt="common image"
                    />
                  </div>
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <div className="m-4">
                    <h2>
                      <strong className="brand-name"> Our Mission </strong>
                    </h2>
                    <hr />
                    <p className="my-3">
                      (*)To establish school, Technical / Professional Education etc. and residential schools especially for girls
                      in order to provide modern education to educationally backward societies preferably in or around,
                      urban, semi urban and rural areas.
                    </p>
                    <p className="my-3">
                      (*) To do health activities for the development of the society such as to prepare health workers , run
                      and maintain Clinics and organize and maintain health Camps and provide necessary support to them.

                    </p>
                    <p className="my-3">
                      (*) To accept grants, donations, assistance from public bodies, corporations, companies or persons or
                      trusts, Indian / corporation / companies and foundations for the purposes of the Society and to manage
                      efficient, effective and permissible fund flow and fund utilization in consonance with the objects stated
                      herein.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
