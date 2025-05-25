import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import OrderForm from "./components/OrderForm";
import Samples from "./components/Samples";
import Login from "./components/Login";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<OrderForm />} />
      <Route path="/samples" element={<Samples />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
