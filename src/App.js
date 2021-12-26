import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Navbar from "./pages/Navbar/Navbar";
import "./App.css";
import Footer from "./pages/Footer/Footer";
import Managingbody from "./pages/Home/Managingbody";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<Navigate to ="/" />}/>  */}
        </Routes>
      <Footer /> 
      </div>
    </div>
  );
};

export default App;
