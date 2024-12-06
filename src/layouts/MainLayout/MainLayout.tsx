import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="p-8 flex-1">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
