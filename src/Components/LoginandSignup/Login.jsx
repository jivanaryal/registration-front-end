import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const URL =
  "https://registration-backend-production.up.railway.app/api/v1/user/login";

const LoginPage = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  const generateError = (err) =>
    toast.error(err, {
      position: "top-right",
    });
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        URL,
        { ...values },
        {
          withCredentials: true,
        }
      );

      console.log({ data });
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) {
            return generateError(email);
          } else if (password) {
            return generateError(password);
          }
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-5xl">Login Page</h1>
      <form
        className="bg-white p-6 rounded-lg "
        onSubmit={(e) => handlesubmit(e)}>
        <label className="block font-medium text-lg mb-2">
          Email:
          <input
            className="form-input rounded-md mt-1 block w-[40%]"
            type="email"
            name="email"
            value={values.email}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your email"
          />
        </label>
        <br />
        <label className="block font-medium text-lg mb-2">
          Password:
          <input
            className="form-input rounded-md mt-1 block w-[40%]"
            type="password"
            name="password"
            value={values.password}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your password"
          />
        </label>
        <ToastContainer />

        <div className="flex items-center gap-8">
          <button
            type="submit"
            className={`bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 `}>
            Login
          </button>
          <Link to="/register">
            <button
              className={`bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 `}>
              Signup
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
