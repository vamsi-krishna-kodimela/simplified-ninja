import React from "react";
import Logo from "../../../assets/images/logo.svg";

const HeroSection = () => {
  return (
    <div className="w-4/5 p-8 rounded-3xl bg-indigo-500 gap-6 grid grid-cols-[1fr_auto]">
      <h6 className="text-4xl font-medium text-white">
        Empowering Entrepreneurs: From Idea to Impact
      </h6>
      <img src={Logo} className="w-48 row-span-2" />
      <div>
        <button className="btn text-white bg-slate-900 rounded-lg p-8 py-2 text-lg font-semibold">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
