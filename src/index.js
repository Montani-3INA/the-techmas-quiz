import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  NotFound,
  Navigation,
  Footer,
  Home,
  Game,
  About,
} from "./components";



ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
    <Route path='*' element={<NotFound />}/>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/about" element={<About />} >
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);