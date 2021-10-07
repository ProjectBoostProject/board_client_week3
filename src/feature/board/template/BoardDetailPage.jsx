import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dummyBoardEntities } from "../../../common/data/dummyBoardData";
import DetailHeader from "../component/DetailHeader";

const Container = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-right: auto;
  margin-left: auto;
`;
const Content = styled.div`
  width: 100%;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  color: #000;
`;

const BoardDetailPage = () => {
  const router = useRouter();
  const { boardId } = router.query;

  const [board, setBoard] = useState(null);
  useEffect(() => {
    setBoard(dummyBoardEntities[boardId]);
  }, [boardId]);

  return board ? (
    <Container>
      <DetailHeader
        title={board.title}
        writer={board.writer}
        updatedAt={board.updatedAt}
      />
      <Content>{board.content}</Content>
    </Container>
  ) : null;
};

export default BoardDetailPage;
