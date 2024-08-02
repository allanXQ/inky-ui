import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Layouts";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
