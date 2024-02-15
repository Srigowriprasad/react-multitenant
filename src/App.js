import React from "react";
import { BrowserRouter } from "react-router-dom";
import { getApp } from "./Utils/helper";

export const App = () => {
  const CurrentApp = getApp();
  return (
    <BrowserRouter>
      <CurrentApp />
    </BrowserRouter>
  );
};

export default React.memo(App)
