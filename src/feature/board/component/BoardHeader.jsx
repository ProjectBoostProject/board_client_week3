import React from "react";
import styled from "styled-components";
import { colors } from "../../../common/style/color";

const Contaier = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding: 15px;

  border-bottom: 2px solid #777;

  color: ${colors.text};
`;

const BoardHeader = () => {
  return (
    <Contaier>
      <div>제목</div>
      <div>작성자</div>
    </Contaier>
  );
};

export default BoardHeader;
