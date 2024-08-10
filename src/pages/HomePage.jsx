import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../utils/Export";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export { HomePage };
