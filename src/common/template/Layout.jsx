import React from "react";
import styled from "styled-components";
import MenuList from "../../feature/menu/template/MenuList";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <MenuList />
      {children}
    </Container>
  );
};

export default Layout;
