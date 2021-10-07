import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 5px;

  border-bottom: 1px solid #cdcdcd;
`;

const Writer = styled.div`
  flex: 0 0 100px;
`;
const Content = styled.div`
  flex: 1 1 100px;
`;
const Time = styled.div`
  flex: 0 0 150px;
`;

const ReplyItem = ({ writer, content, time }) => {
  return (
    <Container>
      <Writer>{writer}</Writer>
      <Content>{content}</Content>
      <Time>{time}</Time>
    </Container>
  );
};

export default ReplyItem;
