import React from "react";
import Logo from "../../../assets/images/logo.svg";

const HeroSection = () => {
  return (
    <div className="w-100 p-12 rounded-3xl bg-indigo-500 gap-6 grid grid-cols-[1fr_auto]">
      <div>
        <h6 className="text-4xl font-medium text-white">
          Empowering Entrepreneurs: From Idea to Impact
        </h6>
      </div>
      <img src={Logo} className="w-48 row-span-2" />
      <div className="self-end">
        <button className="btn text-white bg-slate-900 rounded-lg p-8 py-2 text-lg font-semibold">
          Join Now
        </button>
        {/* <button className="text-indigo-500 bg-slate-50 rounded-lg p-8 py-2 text-lg font-semibold">
          Explore Features
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;
