import axios from "axios";
// Utilizing Axios for HTTP requests and Local Storage for
// User information.
const API_URL = "http://localhost:8080/api/auth/";

// POST {username, email, userid, password}
const register = (username, email, userid, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    userid,
    password,
  });
};

// POST {username, password} & save JWT to Local Storage
const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

// remove JWT from Local Storage
const logout = () => {
  localStorage.removeItem("user");
};

// Export functions
export default {
  register,
  login,
  logout,
};