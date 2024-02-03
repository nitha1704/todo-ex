import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const RoutesComponent = () => {
  return (
    <>
      <div id="app">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
};

export default RoutesComponent;
