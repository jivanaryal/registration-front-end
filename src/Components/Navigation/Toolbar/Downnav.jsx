import React from "react";
import { Link } from "react-router-dom";
import about1 from "../../images/about1.jpg";
import logo from "../../images/logo.jpg";
import { AiFillSetting } from "react-icons/ai";
const Downnav = () => {
  return (
    <div className="border-2 shadow-lg py-3 bg-[#E2E2E2]">
      <div className="w-screen grid grid-cols-7">
        <div className="flex gap-4 col-span-4 justify-around items-center  text-3xl capitalize">
          <img src={logo} alt="" className="w-36 bg-transparent" />
          <Link to="/">
            <div>home</div>
          </Link>
          <Link to="/student">
            <div>our student</div>
          </Link>
        </div>
        <div className="col-span-2"></div>
        <div className="flex text-xl justify-evenly items-center col-span-1">
          <AiFillSetting className="text-3xl" />
          <img
            src={about1}
            alt=""
            className="w-12 h-12 border-2 border-red-500 p-[2px]  rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Downnav;
