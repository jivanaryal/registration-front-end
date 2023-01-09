import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col w-screen h-[67vh] justify-center items-center ">
        <div className="text-5xl font-bold text-lime-600">
          Welcome to Our Registration page
        </div>
        <div className="flex pt-20 gap-10 capitalize ">
          <Link to="/registration">
            <div className="border-2 py-4 px-4 text-2xl bg-blue-400 text-white shadow-green-200  font-bold shadow-xl hover:bg-lime-500 duration-700 delay-75 transition-all">
              apply for bca
            </div>
          </Link>
          <Link to="/registration">
            <div className="border-2 py-4 px-4 text-2xl bg-blue-400 text-white shadow-green-200  font-bold shadow-xl  hover:bg-lime-500 duration-700 delay-75 transition-all">
              apply for bbs
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
