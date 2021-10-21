import axios from "axios";

const baseURL = "http://localhost:8080";
export const registerAPI = async (userId, userName, userPassword) => {
  try {
    const { data } = await axios.post(`${baseURL}/add/user`, {
      userId,
      userName,
      userPassword,
    });
    return data.token;
  } catch (error) {
    console.log("Register User Error", error.message);
    return "";
  }
};
export const getUserDataAPI = async (userId) => {
  try {
    const { data } = await axios.get(`${baseURL}/user/${userId}`);
    return data;
  } catch (error) {
    console.log("Get UserId Error", error.message);
    return {};
  }
};
