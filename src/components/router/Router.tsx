import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PagesRoutes, HomePage } from "../../pages";


export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PagesRoutes.home} element={ <HomePage/> }/>
    </Routes>
  </BrowserRouter>
);