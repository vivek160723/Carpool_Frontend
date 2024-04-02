import React from "react";
import { Routes, Route, } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarDetails from "../pages/CarDetails";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PublishRidePage from "../pages/PublishRide";


const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/c/:slug" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/PublishRidePage" element={<PublishRidePage />} />
    </Routes>
  );
};
export default Routers;
