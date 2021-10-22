import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AddMenuModal from "../component/AddMenuModal";
import MenuItem from "../component/MenuItem";
import { getMenuListStart } from "../utils/menu.action";
import { selectMenuList } from "../utils/menu.reducer";

const Container = styled.div`
  width: 100%;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding: 12px 8px;

  background-color: #cdcdcd;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 8px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: none;

  background: transparent;
  :hover {
    background-color: #fcfcfc;
  }
`;

const MenuList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const menuList = useSelector(selectMenuList);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(getMenuListStart());
  }, []);

  const onAdd = () => {
    setVisible(true);
  };
  const onSearch = () => {
    router.push("/boards/search");
  };

  return (
    <Container>
      {menuList.map(({ id, boardName }) => (
        <MenuItem key={id} menuId={id} menuName={boardName} />
      ))}
      <Button onClick={onAdd}>게시판 추가하기</Button>
      <Button onClick={onSearch}>게시판 검색하기</Button>
      {visible && (
        <AddMenuModal
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      )}
    </Container>
  );
};

export default MenuList;
