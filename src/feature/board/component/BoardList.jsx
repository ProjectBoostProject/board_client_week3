import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getBoardListAPI } from "../utils/board.api";

import BoardHeader from "./BoardHeader";
import BoardItem from "./BoardItem";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const router = useRouter();
  const { menuId } = router.query;

  useEffect(() => {
    if (menuId)
      getBoardListAPI(menuId).then(({ boards }) => {
        console.log(boards);
        setBoardList(boards);
      });
  }, [menuId]);

  return (
    <Container>
      <BoardHeader />
      {boardList.map((board) => (
        <BoardItem
          key={board.id}
          id={board.id}
          title={board.title}
          writer={board.writer}
        />
      ))}
    </Container>
  );
};

export default BoardList;
