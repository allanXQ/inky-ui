import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Layouts";
import About from "./Pages/About";
import Book from "./Pages/Book";
import AdminPanel from "./Pages/Admin";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};

export default App;
