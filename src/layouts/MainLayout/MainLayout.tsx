import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Rightbar from "../../components/Leftbar/Rightbar";

const MainLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[1fr_5fr] w-100 items-start grid-rows-[minmax(144px,_auto)] overflow-hidden">
      <Navbar />
      <Header />
      <div className="p-8 pt-0 flex-1 flex gap-60 h-full overflow-auto">
        <main className="flex-1 flex flex-col gap-12">
          <Outlet />
        </main>
        <Rightbar />
      </div>
    </div>
  );
};

export default MainLayout;
