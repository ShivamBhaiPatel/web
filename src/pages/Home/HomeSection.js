import React from "react";
import "./section.css";

function HomeSection() {
  return (
    <div>
      <div className="">
        <section className="feature-area">
          <div className="row my-4">
            <div className="col-lg-4">
              <div className="m-4">
                <div className="single-feature sect glass">
                  <div className="title">
                    <h4>History</h4>
                  </div>
                  <div className="desc-wrap">
                    <p>
                      The society was established in the year 2007 for welfare and
                      education of people.It is registered under the Societies
                      Registration Act, 1860. 
                      It is located in Jalalpur, Ambedkar
                      Nagar, Uttar Pradesh.
                    </p>
                    <a href="/about">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="m-4">
                <div className="single-feature sect glass">
                  <div className="title">
                    <h4>Vision</h4>
                  </div>
                  <div className="desc-wrap">
                    <p>
                      Promoting the spirit of equality and fraternity we strive to
                      improve the quality and level of education and health
                      amongst the economically, socially, and educationally
                      backward sections of the society.
                    </p>
                    <a href="/about">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="m-4">
                <div className=""></div>
                <div className="single-feature sect glass">
                  <div className="title">
                    <h4>Mission</h4>
                  </div>
                  <div className="desc-wrap">
                    <p>
                      The Foundation is a voluntary, non-political, non-profit
                      making social service society, established to promote
                      education amongst economically, socially, and educationally
                      backward sections of the society.
                    </p>
                    <a href="/about">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeSection;
