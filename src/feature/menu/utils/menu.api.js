import axios from "axios";

const baseURL = "http://localhost:8080/api";
export const addMenuAPI = async (boardName, introduce) => {
  try {
    const { data } = await axios.post(`${baseURL}/add/menu`, {
      boardName,
      introduce,
    });
    return data.menu;
  } catch (error) {
    alert("게시판 생성에 실패했습니다.");
    return { menuId: 1 };
  }
};

export const getMenuListAPI = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/menus`, {
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    });
    return data.menus;
  } catch (error) {
    alert("게시판 목록 불러오기에 실패했습니다.");
    return [];
  }
};

export const getMenuSearchListAPI = async (boardName) => {
  try {
    console.log(boardName);
    const { data } = await axios.get(
      `${baseURL}/menus?boardName=${boardName}`,
      {
        headers: { "Content-Type": "application/json;charset=UTF-8" },
      }
    );
    return data.menus;
  } catch (error) {
    alert("게시판 목록 불러오기에 실패했습니다.");
    return [];
  }
};
