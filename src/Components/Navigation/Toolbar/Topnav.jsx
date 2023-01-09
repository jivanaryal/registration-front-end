import React from "react";
import { BiPhoneCall, BiMessageRoundedDots } from "react-icons/bi";

const Topnav = () => {
  return (
    <div className="bg-lime-600 text-white py-1 ">
      <div className="flex w-10/12 mx-auto justify-between">
        <div className="flex gap-6 items-center">
          <BiPhoneCall />
          <div>45345-34534-4</div>
          <BiMessageRoundedDots />
          <div>introvertcollege@gmail.com</div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-2xl">Introvert college,Ktm bagbajar-4</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
