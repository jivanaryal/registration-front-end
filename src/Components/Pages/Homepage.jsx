import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const URL =
  "https://registration-backend-production.up.railway.app/api/v1/user/";

const Homepage = () => {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookie.jwt) {
        return navigate("/login");
      } else {
        const { data } = await axios.post(URL, {}, { withCredentials: true });
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login", { replace: true });
        } else {
          setCookie("jwt");
          toast(`Hi ${data.user}`, { theme: "dark" });
        }
      }
    };
    verifyUser();
  }, [cookie, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <div>
      <ToastContainer />
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
        <div onClick={logOut}>logout</div>
      </div>
    </div>
  );
};

export default Homepage;
