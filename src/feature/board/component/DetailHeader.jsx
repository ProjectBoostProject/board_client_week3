/* eslint-disable no-alert */
import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";
import PopUp from "../../../common/component/PopUp";
import { deleteBoardAPI } from "../utils/board.api";

const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding: 10px 5px 10px 5px;
  margin-bottom: 20px;

  border-bottom: 1px solid #ccc;
`;

const Title = styled.div`
  color: #080808;
  font-size: 20px;
  font-weight: bold;
`;
const Writer = styled.span`
  color: #080808;
  font-size: 12px;
  font-weight: lighter;
`;
const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const DetailHeader = ({ id, title, writer, updatedAt, password }) => {
  const router = useRouter();
  const { menuId } = router.query;

  const onModify = (inputPassword) => {
    if (password === inputPassword)
      router.push(`/boards/${menuId}/${id}/modify`);
    else alert("비밀번호가 잘못되었습니다.");
  };
  const onDelete = (inputPassword) => {
    if (inputPassword === password) {
      deleteBoardAPI(id).then(() => {
        alert("삭제되었습니다.");
        router.push("/boards");
      });
    } else {
      alert("잘못된 비밀번호 입니다.");
    }
  };

  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Writer>{`${writer} |  ${updatedAt}`}</Writer>
      </div>
      <ButtonSection>
        <PopUp title="수정" onEnd={onModify} />
        <PopUp title="삭제" onEnd={onDelete} />
      </ButtonSection>
    </Container>
  );
};

export default DetailHeader;
