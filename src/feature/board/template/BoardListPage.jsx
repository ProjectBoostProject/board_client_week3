import React from "react";
import styled from "styled-components";
import BoardList from "../component/BoardList";

const Container = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  padding: 5px;
`;

const BoardListPage = () => {
  return (
    <Container>
      <BoardList />
      <ButtonSection>
        <button type="button">글 쓰기</button>
      </ButtonSection>
    </Container>
  );
};

export default BoardListPage;
