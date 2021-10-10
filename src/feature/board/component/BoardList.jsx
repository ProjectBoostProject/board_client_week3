import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dummyBoardList } from "../../../common/data/dummyBoardData";

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
  const [boardList, setBoardList] = useState(dummyBoardList);
  useEffect(() => {
    getBoardListAPI().then((boards) => setBoardList(boards));
  }, []);

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
