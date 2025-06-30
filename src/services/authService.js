import axios from "axios";

const LOGIN_URL = "https://backend-pemrogiii.onrender.com/login";
const REGISTER_URL = "https://backend-pemrogiii.onrender.com/register"; // pastikan endpoint ini tersedia di backend

export const login = async (username, password) => {
  const response = await axios.post(LOGIN_URL, { username, password });
  return response.data;
};

export const register = async ({ username, password, role }) => {
  const response = await axios.post(REGISTER_URL, {
    username,
    password,
    role,
  });
  return response.data;
};
