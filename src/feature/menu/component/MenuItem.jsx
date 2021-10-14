import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 12px;
  padding: 8px;

  border-radius: 4px;
  :hover {
    background-color: #fcfcfc;
  }
`;

const MenuItem = ({ menuName, menuId }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/boards/${menuId}`);
  };

  return <Container onClick={onClick}>{menuName}</Container>;
};

export default MenuItem;
