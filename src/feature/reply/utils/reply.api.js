import axios from "axios";

const baseURL = "http://localhost:8080/api";
export const getReplyListAPI = async (boardId) => {
  const { data } = await axios.get(`${baseURL}/reply/${boardId}`);
  return data.replies;
};

export const addReplyAPI = async (boardId, writer, content, password) => {
  try {
    await axios.post(`${baseURL}/add/reply`, {
      boardId,
      writer,
      content,
      password,
    });
  } catch (error) {
    console.log("Add Reply Error : ", error.message);
  }
};

export const deleteReplyAPI = async ({ replyId }) => {
  try {
    await axios.delete(`${baseURL}/delete/${replyId}`);
  } catch (error) {
    console.log("Delete Reply Error : ", error.message);
  }
};
