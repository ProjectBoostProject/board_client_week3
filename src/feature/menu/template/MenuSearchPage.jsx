import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dummyMenuData } from "../../../common/data/dummyMenuData";
import MenuListItem from "../component/MenuListItem";
import MenuSearchBar from "../component/MenuSearchBar";
import { getMenuListAPI } from "../utils/menu.api";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 20px 0 0 0;
`;

const MenuSearchPage = () => {
  const [searchMenuName, setSearchMenuName] = useState("");
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    if (searchMenuName.length > 0)
      getMenuListAPI(searchMenuName).then((data) => {
        setMenuList(data);
      });
    else {
      setMenuList([]);
    }
  }, [searchMenuName]);
  return (
    <Container>
      <MenuSearchBar
        value={searchMenuName}
        onChange={({ target }) => {
          setSearchMenuName(target.value);
        }}
      />
      {menuList.map(({ boardName, introduce }) => (
        <MenuListItem menuName={boardName} introduce={introduce} />
      ))}
    </Container>
  );
};

export default MenuSearchPage;
