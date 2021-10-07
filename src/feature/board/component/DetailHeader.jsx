import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  padding: 10px 5px 10px 5px;
  margin-bottom: 20px;

  border-bottom: 1px solid #ccc;
`;

const Title = styled.div`
  color: #080808;
  font-size: 20px;
  font-weight: bold;
`;
const Writer = styled.span`
  color: #080808;
  font-size: 12px;
  font-weight: lighter;
`;

const DetailHeader = ({ title, writer, updatedAt }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Writer>{`${writer} |  ${updatedAt}`}</Writer>
    </Container>
  );
};

export default DetailHeader;
