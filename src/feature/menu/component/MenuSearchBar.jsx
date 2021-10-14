import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  box-sizing: border-box;
  padding: 4px 8px;
  margin-bottom: 20px;

  border: 1px solid #cdcdcd;
`;

const Input = styled.input`
  width: 100%;
  font-size: 15px;

  border: none;
  :hover {
    border: none;
  }
  :focus {
    outline: none;
    border: none;
  }
`;

const MenuSearchBar = ({ value, onChange }) => {
  return (
    <Container>
      <Input
        value={value}
        onChange={onChange}
        placeholder="검색어를 입력해주세요..."
      />
    </Container>
  );
};

export default MenuSearchBar;
