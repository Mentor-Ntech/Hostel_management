import axios from "axios";

export const API_URL = `http://localhost:3500/admin/`;

const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
  return response.data;
};

// Login Admin
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};

// Logout Admin
const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};

// Get Login Status
const getLoginStatus = async () => {
  const response = await axios.get(API_URL + "login-status");
  return response.data;
};

// Get Admin profile
const getUser = async () => {
  const response = await axios.get(API_URL + "getAdmin");
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get(API_URL + "getAdmins");

  return response.data;
};

// Delete User
const deleteUser = async (id) => {
  const response = await axios.delete(API_URL + id);

  return response.data.message;
};


const updateUser = async (userData) => {
  const response = await axios.patch(API_URL + "updateUser", userData);
  return response.data;
};

const adminService = {
  register,
  login,
  logout,
  getLoginStatus,
  getUser,
  getUsers,
  deleteUser,
  updateUser
};

export default adminService;
