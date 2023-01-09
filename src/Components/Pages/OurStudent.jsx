import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getAllStudent } from "../../services/api";
import { Link } from "react-router-dom";

const OurStudent = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let res = await getAllStudent(student);
    setStudent(res.data);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Details </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {student.map((val, i) => {
          console.log(val);
          return (
            <TableRow key={i}>
              <TableCell>{i}</TableCell>
              <TableCell>{val.name}</TableCell>
              <TableCell>{val.address}</TableCell>
              <TableCell>{val.contact}</TableCell>
              <Link to={`/single/${val._id}`}>
                {" "}
                <TableCell className="more">More...</TableCell>
              </Link>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default OurStudent;
