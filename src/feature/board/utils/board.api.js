import axios from "axios";

const baseURL = "http://localhost:8080/api";

export const getBoardListAPI = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/boards`);
    console.log(data);
    return data;
  } catch (error) {
    console.log("Get Board List API Error : ", error.message);
    return [];
  }
};

export const getBoardAPI = async (boardId) => {
  try {
    const { data } = await axios.get(`${baseURL}/boards/${boardId}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log("Get Board List API Error : ", error.message);
    return { title: "", content: "", updateTime: "", writer: "" };
  }
};

export const createBoardAPI = async (writer, password, title, content) => {
  const { data } = await axios.post(`${baseURL}/add`, {
    writer,
    password,
    title,
    content,
  });
  return data;
};

export const deleteBoardAPI = async (boardId) => {
  await axios.delete(`${baseURL}/delete/${boardId}`);
};
