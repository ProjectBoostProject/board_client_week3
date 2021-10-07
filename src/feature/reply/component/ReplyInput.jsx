import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 8px;
`;
const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-right: 20px;
`;

const UserInfoInput = styled.input`
  width: 80px;

  margin-bottom: 8px;
`;

const ContentInput = styled.textarea`
  height: 80%;

  flex: 1;
  margin-right: 8px;
`;

const ReplyInput = ({ addReply }) => {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const onClick = () => {
    addReply(writer, content, password, new Date().toLocaleDateString());
    setWriter("");
    setPassword("");
    setContent("");
  };

  return (
    <Container>
      <UserInfoSection>
        <UserInfoInput
          placeholder="작성자"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />
        <UserInfoInput
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </UserInfoSection>
      <ContentInput
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="button" onClick={onClick}>
        작성
      </button>
    </Container>
  );
};

export default ReplyInput;
