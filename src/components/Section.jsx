import React from "react";
import styled from "styled-components";

function Section(props) {
  // console.log(props);
  return (
    <Wrap bgImage={props.backgroundImg}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.leftBtnText}</LeftButton>
          {props.rightBtnText && (
            <RightButton>{props.rightBtnText}</RightButton>
          )}
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

// Components
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-weight: 400;

  h1 {
    font-weight: 500;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.86;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: #ffffff;
  color: #000000;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;
