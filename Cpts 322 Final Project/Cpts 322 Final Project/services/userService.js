import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/api/test/";

const getGeneralUser = () => {
  return axios.get(API_URL + "all");
};

const getRegisteredUser = () => {
  return axios.get(API_URL + "user", { headers: authHeader() }); // when requesting authorized resource.
};

const getStudent = () => {
  return axios.get(API_URL + "student", { headers: authHeader() }); // when requesting authorized resource.
};

const getTeacher = () => {
    return axios.get(API_URL + "teacher", { headers: authHeader() }); // when requesting authorized resource.
  };

const getAdmin = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() }); // when requesting authorized resource.
};

export default {
    getGeneralUser,
    getRegisteredUser,
    getStudent,
    getTeacher,
    getAdmin,
};