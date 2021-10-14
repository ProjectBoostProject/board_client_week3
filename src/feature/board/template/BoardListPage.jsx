import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardList from "../component/BoardList";
import BoardPage from "../component/BoardPage";
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
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [boardList, setBoardList] = useState([]);

  const getBoardList = () => {
    getBoardListAPI(menuId, curPage).then((data) => {
      setBoardList(data.boards);
      setMenu(data.menu);
      setTotalPage(Math.floor((data.totalCount - 1) / 10 + 1) || 1);
    });
  };
  useEffect(() => {
    if (menuId !== undefined) getBoardList();
  }, [curPage]);
  useEffect(() => {
    if (menuId !== undefined) getBoardList();
    setCurPage(1);
  }, [menuId]);

  const onClick = () => {
    router.push(`/boards/${menuId}/create`);
  };
  const onPlus = () => {
    if (curPage < totalPage) setCurPage(curPage + 1);
  };
  const onMinus = () => {
    if (curPage > 1) setCurPage(curPage - 1);
  };

  return (
    <Container>
      <BoardTitle menuName={menu?.boardName} introduce={menu?.introduce} />
      <BoardList boardList={boardList} />
      <BoardPage
        curPage={curPage}
        totalPage={totalPage}
        onMinus={onMinus}
        onPlus={onPlus}
      />
      <ButtonSection>
        <button type="button" onClick={onClick}>
          글 쓰기
        </button>
      </ButtonSection>
    </Container>
  );
};

export default BoardListPage;
