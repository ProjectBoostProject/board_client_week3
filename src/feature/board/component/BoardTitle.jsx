import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 20px;
  padding: 4px;

  .title {
    font-size: 20px;
    font-weight: bold;

    margin-bottom: 4px;
  }
  .introduce {
    font-size: 16px;
    font-weight: lighter;
  }
`;

const BoardTitle = ({ menuName, introduce }) => {
  return (
    <Container>
      <span className="title">{menuName}</span>
      <span className="introduce">{introduce}</span>
    </Container>
  );
};

export default BoardTitle;
