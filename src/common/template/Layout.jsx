import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuList from "../../feature/menu/template/MenuList";
import { getMenuListAPI } from "../../feature/menu/utils/menu.api";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    getMenuListAPI().then((data) => setMenuList(data));
  }, []);

  return (
    <Container>
      <MenuList menuList={menuList} />
      {children}
    </Container>
  );
};

export default Layout;
