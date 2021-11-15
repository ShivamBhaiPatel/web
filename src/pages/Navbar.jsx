import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/">
                Spark
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">
                      About Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/service">
                      Service
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>
                  
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
