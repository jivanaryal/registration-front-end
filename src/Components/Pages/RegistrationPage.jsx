import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { addStudent } from "../../services/api";

const defaultStudent = {
  name: "",
  address: "",
  fathername: "",
  contact: "",
  nationality: "",
  email: "",
};

const RegistrationPage = () => {
  const [student, setStudent] = useState(defaultStudent);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      student.name &&
      student.address &&
      student.contact &&
      student.email &&
      student.fathername &&
      student.nationality
    ) {
      addStudent(student);
      toast.success("Submitted Sucessfully");
      setStudent(defaultStudent);
    } else {
      toast.error("Please fill all the required details");
    }
  };
  const changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setStudent({ ...student, [name]: value });
  };
  return (
    <div className="w-9/12 mx-auto mt-10">
      <div>
        <h1 className="font-bold text-5xl text-center">Registration Form</h1>
        <form>
          <div className=" grid grid-cols-2 w-screen h-[40vh] items-center justify-center mt-10">
            <div>
              <label htmlFor="name">Enter Studentr Name</label>
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="name">Enter Studentr Address</label>
              <input
                type="text"
                name="address"
                value={student.address}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="name">Enter Studentr Father name</label>
              <input
                type="text"
                name="fathername"
                value={student.fathername}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="name">Enter Student Contact</label>
              <input
                type="text"
                name="contact"
                value={student.contact}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="name">Enter Student nationality</label>
              <input
                type="text"
                name="nationality"
                value={student.nationality}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="name">Enter Student email</label>
              <input
                type="text"
                name="email"
                value={student.email}
                onChange={changeHandler}
              />
              <ToastContainer />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="border-2 py-1 mt-2 w-fit px-8 ml-10 bg-lime-600 text-white text-xl  ">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
