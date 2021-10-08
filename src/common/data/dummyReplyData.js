export const dummyReplyList = [
  {
    id: 1,
    boardId: 1,
    content: "ㄹㅇㅋㅋ",
    writer: "이준희",
    updateTime: "2021.10.07 16:51:00",
  },
  {
    id: 2,
    boardId: 1,
    content: "ㄹㅇㅋㅋ",
    writer: "황동욱",
    updateTime: "2021.10.07 16:51:00",
  },
  {
    id: 3,
    boardId: 1,
    content: "ㄹㅇㅋㅋ",
    writer: "최국철",
    updateTime: "2021.10.07 16:51:00",
  },
  {
    id: 4,
    boardId: 1,
    content: "ㄹㅇㅋㅋ",
    writer: "기호영",
    updateTime: "2021.10.07 16:51:00",
  },
];

export const getReplyList = (Id) => {
  const result = dummyReplyList.filter(
    (reply) => reply.boardId === parseInt(Id, 10)
  );
  return result;
};
