import React from "react";
import styled from "styled-components";
import ReplyItem from "./ReplyItem";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const ReplyList = ({ replies }) => {
  return (
    <Container>
      {replies.map((reply) => (
        <ReplyItem
          key={reply.id}
          writer={reply.writer}
          content={reply.content}
          time={reply.updateTime}
        />
      ))}
    </Container>
  );
};

export default ReplyList;
