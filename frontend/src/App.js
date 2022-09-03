
// import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/Home";
// import About from "./Components/about";
import Call from "./components/Call";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <h1>hello world suraj</h1>
	  <Link to='/call'>Call </Link>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/call" element={<Call />} />
      </Routes>
    </Router>
  );
}

export default App;
