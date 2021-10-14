import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-left: 8px;
`;
const Button = styled.button`
  margin-left: 8px;
`;

const BoardPage = ({ curPage, totalPage, onPlus, onMinus }) => {
  return (
    <Container>
      <Button type="button" onClick={onMinus}>
        {"<"}
      </Button>
      <Input value={curPage} />
      <span>{`/ ${totalPage}`}</span>
      <Button type="button" onClick={onPlus}>
        {">"}
      </Button>
    </Container>
  );
};

export default BoardPage;
