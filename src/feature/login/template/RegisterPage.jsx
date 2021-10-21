import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;

  border-radius: 8px;

  background-color: #eeeff1;

  .register {
    font-size: 12px;
    text-decoration: underline;
    color: #9b9b9b;

    :hover {
      cursor: pointer;
    }
  }
`;

const Input = styled.input`
  width: 300px;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: none;

  box-sizing: border-box;
  padding: 4px 8px;
  margin-bottom: 16px;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 8px;
  margin-bottom: 8px;

  background-color: #cdcdcd;

  :hover {
    box-shadow: 0 1px 1px 0;
  }
  :disabled {
    background: #a0a0a0;
    color: #c8c8c8;
  }
`;
const RegisterPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  return (
    <Container>
      <InputSection>
        <Input
          placeholder="아이디를 입력해주세요."
          value={id}
          onChange={({ target }) => setId(target.value)}
        />
        <Input
          placeholder="비밀번호를 입력해주세요."
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Input
          placeholder="비밀번호를 한번 더 입력해주세요."
          type="password"
          value={passwordCheck}
          onChange={({ target }) => setPasswordCheck(target.value)}
        />
        <Button disabled={password.length === 0 || passwordCheck !== password}>
          회원가입
        </Button>
      </InputSection>
    </Container>
  );
};

export default RegisterPage;
