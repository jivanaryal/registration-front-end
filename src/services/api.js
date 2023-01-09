import axios from "axios";
const URL = "http://localhost:5000/api/v1/student";

export const addStudent = async (data) => {
  try {
    return await axios.post(URL, data);
  } catch (error) {}
};

export const getAllStudent = async () => {
  try {
    return await axios.get(URL);
  } catch (error) {
    console.log(error);
  }
};

export const getStudent = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const editStudent = async (user, id) => {
  try {
    return await axios.post(`${URL}/${id}`, user);
  } catch (error) {}
};
