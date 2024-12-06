import React from "react";
import { Bell, Search } from "react-feather";

const Header = () => {
  return (
    <header className="p-8 w-100 flex justify-between flex-col lg:flex-row items-center">
      <div>
        <h4 className="text-base text-slate-500 m-0 mb-2">
          Hi, Vamsi Krishna Kodimela
        </h4>
        <h5 className="text-5xl text-slate-600 m-0 font-semibold">
          Welcome Back
        </h5>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center border rounded-full  p-5 py-2 gap-2 text-slate-600">
          <Search className="w-5" />
          <input
            className="placeholder:text-slate-400 outline-none text-ellipsis"
            type="text"
            placeholder="Search"
          />
        </div>
        <button className="rounded-full shadow w-10 h-10">
          <Bell className="m-auto text-indigo-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;
