import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import "./Styles";

export const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
