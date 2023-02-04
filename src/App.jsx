import React from "react";
import SideNav from "./components/sidenavbar/SideNav";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <div className="sidebar">
            <SideNav />
          </div>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Contact" element={<Contact />} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
