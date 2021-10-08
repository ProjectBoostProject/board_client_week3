import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";
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
const Button = styled.button`
  margin-right: 4px;
`;

const DetailHeader = ({ id, title, writer, updatedAt }) => {
  const router = useRouter();

  const onModify = () => {
    router.push(`/boards/${id}/modify`);
  };
  const onDelete = () => {
    deleteBoardAPI(id);
    router.push("/boards");
  };
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Writer>{`${writer} |  ${updatedAt}`}</Writer>
      </div>
      <div>
        <Button type="button" onClick={onModify}>
          수정
        </Button>
        <Button type="button" onClick={onDelete}>
          삭제
        </Button>
      </div>
    </Container>
  );
};

export default DetailHeader;
