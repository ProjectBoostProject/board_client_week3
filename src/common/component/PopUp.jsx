import React, { useState } from "react";
import styled from "styled-components";
import PasswordConfirm from "./PasswordConfirm";

const Container = styled.div`
  margin-right: 4px;
`;

const PopUpSection = styled.div`
  position: fixed;
  box-sizing: border-box;

  padding: 10px;
  margin-top: 8px;

  border: 1px solid #cdcdcd;
  border-radius: 4px;
  background-color: #ffffff;
`;

const PopUp = ({ title, onEnd }) => {
  const [isClicked, setIsClicked] = useState(false);
  function onClick() {
    setIsClicked(!isClicked);
  }
  return (
    <Container>
      <button type="button" onClick={onClick}>
        {title}
      </button>
      {isClicked && (
        <PopUpSection onBlur={() => setIsClicked(false)}>
          <PasswordConfirm onEnd={onEnd} />
        </PopUpSection>
      )}
    </Container>
  );
};

export default PopUp;
