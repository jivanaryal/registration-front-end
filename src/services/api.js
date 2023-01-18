import axios from "axios";
const URL = "https://jivan-aryal.adaptable.app/api/v1/student";

export const addStudent = async (data) => {
  try {
    return await axios.post(URL, data);
  } catch (error) {
    console.log(error);
  }
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
    return await axios.patch(`${URL}/${id}`, user);
  } catch (error) {
    console.log(error);
  }
};
