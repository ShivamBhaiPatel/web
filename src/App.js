import React from 'react';
import {Routes , Route , Navigate} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './pages/Home';
import About from "./pages/About";
import Contact from './pages/Contact';
import Service from "./pages/Service";
import Navbar from "./pages/Navbar";
import './App.css';
import Footer from './pages/Footer';

const App =() => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Navigate to ="/" />}/> */}
      </Routes>
      
    </>
  );
}

export default App;
