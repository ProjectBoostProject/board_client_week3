import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import styled from "styled-components";
import AddMenuModal from "../component/AddMenuModal";
import MenuItem from "../component/MenuItem";

const Container = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

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

const MenuList = ({ menuList }) => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

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
