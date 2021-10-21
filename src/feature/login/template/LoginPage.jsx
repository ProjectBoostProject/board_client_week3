/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from "next/dist/client/router";
import React from "react";
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
`;

const LoginPage = () => {
  const router = useRouter();
  const onRegisterClick = () => {
    router.push("register");
  };
  return (
    <Container>
      <InputSection>
        <Input placeholder="아이디를 입력해주세요." />
        <Input placeholder="비밀번호를 입력해주세요." type="password" />
        <Button>로그인</Button>
        <span className="register" onClick={onRegisterClick}>
          회원가입
        </span>
      </InputSection>
    </Container>
  );
};

export default LoginPage;
