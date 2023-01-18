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
import { useMemo } from "react";

const OurStudent = () => {
  const [student, setStudent] = useState([]);
  const [query, setQuery] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAllUsers = async () => {
    let res = await getAllStudent(student);
    setStudent(res.data);
  };
  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line no-use-before-define
  }, [getAllUsers]);

  const filteredItems = useMemo(() => {
    // eslint-disable-next-line array-callback-return
    return student.filter((item) => {
      if (item) {
        return item.name.toString().toLowerCase().includes(query.toLowerCase());
      }
    });
  }, [student, query]);
  return (
    <div className="relative">
      <input
        type="search"
        name="search"
        placeholder="search a particular student"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" absolute top-1 text-xl right-1 mb-10 py-1 border-2 border-transparent shadow-xl"
      />
      <div className="pb-10 invisible ">hello</div>

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
          {filteredItems.map((val, i) => {
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
    </div>
  );
};

export default OurStudent;
