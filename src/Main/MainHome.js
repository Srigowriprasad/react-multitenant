import React from "react";
import "./MainHome.css";
import { getApp } from "../Utils/helper";

function MainHome() {
  getApp();
  return <div className="main-app">Main-app</div>;
}

export default React.memo(MainHome);
