import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";
import { colors } from "../../../common/style/color";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding: 15px;

  background-color: ${colors.backgoround};
  border-bottom: 1px solid #777;

  color: ${colors.text};
  :hover {
    background-color: ${colors.backgoroundHover};
  }
`;

const BoardItem = ({ id, title, writer }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`boards/${id}`);
  };
  return (
    <Container onClick={onClick}>
      <div>{title}</div>
      <div>{writer}</div>
    </Container>
  );
};

export default BoardItem;
