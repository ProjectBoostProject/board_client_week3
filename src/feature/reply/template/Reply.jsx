import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getReplyList } from "../../../common/data/dummyReplyData";

import ReplyInput from "../component/ReplyInput";
import ReplyList from "../component/ReplyList";

const Container = styled.div`
  width: 100%;
`;

const Reply = () => {
  const router = useRouter();
  const { boardId } = router.query;

  const [replies, setReplies] = useState([]);
  useEffect(() => {
    setReplies(getReplyList(boardId));
  }, [boardId]);

  const addReply = (writer, content, password, time) => {
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
