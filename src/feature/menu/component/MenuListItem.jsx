import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 48px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 4px 8px;
  margin-bottom: 4px;

  border: 1px solid #cccccc;

  .menu-name {
    flex: 1;

    font-size: 16px;
    font-weight: bold;
  }
  .introduce {
    flex-shrink: 0;

    font-size: 12px;
    font-weight: lighter;
  }
`;

const MenuListItem = ({ menuName, introduce }) => {
  return (
    <Container>
      <span className="menu-name">{menuName}</span>
      <span className="introduce">{introduce}</span>
    </Container>
  );
};

export default MenuListItem;
