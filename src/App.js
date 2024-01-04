
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import AddIcon from '@mui/icons-material/Add';

// import Field from "./components/Header-5";

import Salmankhan from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Gallary from "./components/Gallary";

import "./App.css";



// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <Router>
       
      <div className="container ">
        <div className="row">
        <Salmankhan/>
       
          <div className="two">
            {/* <h1>Dom manipulation</h1> */}
            <Routes>
              {/* home */}
              <Route path="/" element={<Home />} />
              {/* about us */}
              <Route path="/about" element={<About />} />
              {/* contact us */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallary" element={<Gallary />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
