import "./App.css";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import AddIcon from '@mui/icons-material/Add';

// import Field from "./components/Field";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container kushal">
        <div className="row">
          <div className="two">
            <h1>Dom manipulation</h1>
            <Routes>
              {/* home */}
              <Route path="/" element={<Home />} />
              {/* about us */}
              <Route path="/about" element={<About />} />
              {/* contact us */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
