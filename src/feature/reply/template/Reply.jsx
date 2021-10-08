import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ReplyInput from "../component/ReplyInput";
import ReplyList from "../component/ReplyList";
import { addReplyAPI, getReplyListAPI } from "../utils/reply.api";

const Container = styled.div`
  width: 100%;
`;

const Reply = () => {
  const router = useRouter();
  const { boardId } = router.query;

  const [replies, setReplies] = useState([]);
  useEffect(() => {
    getReplyListAPI(boardId).then((reply) => {
      setReplies(reply);
    });
  }, [boardId]);

  const addReply = (writer, content, password, time) => {
    addReplyAPI(boardId, writer, content, password);
    setReplies([{ writer, content, password, updateTime: time }, ...replies]);
  };

  return (
    <Container>
      <ReplyInput addReply={addReply} />
      <ReplyList replies={replies} />
    </Container>
  );
};

export default Reply;
