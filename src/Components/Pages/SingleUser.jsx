import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteStudent, getStudent } from "../../services/api";

const SingleUser = () => {
  const [singlestd, setsingleStd] = useState([]);
  const { id } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadStudentDetails = async () => {
    const response = await getStudent(id);
    setsingleStd([response.data]);
  };

  useEffect(() => {
    loadStudentDetails();
  }, [loadStudentDetails]);
  const removeUser = async (id) => {
    deleteStudent(id);
  };
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div>
        <h1 className="font-bold text-5xl">Single Student Details </h1>
      </div>
      {singlestd.map((user, i) => {
        console.log(user);

        return (
          <div
            key={user._id}
            className="flex border-2 shadow-xl mt-10 pr-14 pl-6 py-6 flex-col gap-3 text-2xl mb-14">
            <div>
              ID:<span className="pl-4">{user._id}</span>
            </div>
            <div>
              Name:<span className="pl-4">{user.name}</span>
            </div>
            <div>
              Address:
              <span className="pl-4"> {user.address}</span>
            </div>
            <div>
              Contact:
              <span className="pl-4"> {user.contact}</span>
            </div>
            <div>
              FatherName:
              <span className="pl-4"> {user.fathername}</span>
            </div>
            <div>
              Email:
              <span className="pl-4"> {user.email}</span>
            </div>
            <div>
              Nationality:
              <span className="pl-4"> {user.nationality}</span>
            </div>
            <div className="flex pb-3 pt-5 gap-10 ">
              <Link to={`/edit/${user._id}`}>
                <div className="border-2 py-2 px-2 text-2xl bg-blue-400 text-white shadow-green-200  font-bold shadow-xl hover:bg-lime-500 duration-700 delay-75 transition-all">
                  Edit Details
                </div>
              </Link>
              <Link to="/student">
                <div
                  className="border-2 py-2 px-2 text-2xl bg-blue-400 text-white shadow-green-200  font-bold shadow-xl  hover:bg-lime-500 duration-700 delay-75 transition-all"
                  onClick={() => removeUser(user._id)}>
                  Remove Student
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleUser;
