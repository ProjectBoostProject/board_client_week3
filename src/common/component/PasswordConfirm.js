/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 220px;
`;

const PasswordConfirm = ({ onEnd }) => {
  const [password, setPassword] = useState("");
  return (
    <Container>
      <div>비밀번호를 입력해주세요.</div>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
      />
      <button type="button" onClick={() => onEnd(password)}>
        확인
      </button>
    </Container>
  );
};

export default PasswordConfirm;
