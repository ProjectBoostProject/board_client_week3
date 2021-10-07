import React from "react";
import styled from "styled-components";

import { dummyBoardList } from "../../../common/data/dummyBoardData";
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
  return (
    <Container>
      <BoardHeader />
      {dummyBoardList.map((board) => (
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
