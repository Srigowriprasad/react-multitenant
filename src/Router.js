import { Route, Routes } from "react-router-dom";
import MainHome from "./Main/MainHome";
import React from "react";
import AdminHome from "./Admin/AdminHome";
import UserHome from "./User/UserHome";

export const MainRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<MainHome />} />
      </Routes>
  );
};

export const AdminRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<AdminHome />} />
        </Routes>
    );
  };

  export const UserRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<UserHome />} />
        </Routes>
    );
  };
