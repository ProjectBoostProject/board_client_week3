import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Modal from "../../../common/component/Modal";
import { addMenuStart } from "../utils/menu.action";

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 20px;

  .title {
    font-size: 28px;
    font-weight: bold;

    margin-bottom: 16px;
  }
  .content {
    font-size: 16px;
    font-weight: normal;

    margin-bottom: 8px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 30px;

  margin-bottom: 12px;
  padding: 0 4px;

  border: 1px solid #cdcdcd;
  border-radius: 4px;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 40px;

  margin: 0 auto;
`;

const AddMenuModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();

  const [menuName, setMenuName] = useState("");
  const [introduce, setIntroduce] = useState("");

  const onSubmit = async () => {
    dispatch(addMenuStart(menuName, introduce));
    onClose();
  };

  return (
    <Modal visible={visible} onClose={onClose} width={400} height={280}>
      <Container>
        <span className="title">게시판 등록하기</span>
        <span className="content">게시판 이름을 등록해주세요.</span>
        <Input
          value={menuName}
          onChange={({ target }) => setMenuName(target.value)}
        />
        <span className="content">게시판 설명을 적어주세요.</span>
        <Input
          value={introduce}
          onChange={({ target }) => setIntroduce(target.value)}
        />
        <Button
          type="button"
          onClick={onSubmit}
          disabled={menuName.length === 0 || introduce.length === 0}
        >
          생성하기
        </Button>
      </Container>
    </Modal>
  );
};

export default AddMenuModal;
