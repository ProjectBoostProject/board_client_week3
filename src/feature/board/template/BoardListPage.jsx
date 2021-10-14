import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardList from "../component/BoardList";
import BoardTitle from "../component/BoardTitle";
import { getBoardListAPI } from "../utils/board.api";

const Container = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 10px;
  margin-left: auto;
  margin-right: auto;
`;
const ButtonSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  padding: 5px;
`;

const BoardListPage = () => {
  const router = useRouter();
  const { menuId } = router.query;

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    if (menuId !== undefined)
      getBoardListAPI(menuId).then((data) => setMenu(data.menu));
  }, [menuId]);

  const onClick = () => {
    router.push(`/boards/${menuId}/create`);
  };

  return (
    <Container>
      <BoardTitle menuName={menu?.boardName} introduce={menu?.introduce} />
      <BoardList />
      <ButtonSection>
        <button type="button" onClick={onClick}>
          글 쓰기
        </button>
      </ButtonSection>
    </Container>
  );
};

export default BoardListPage;
