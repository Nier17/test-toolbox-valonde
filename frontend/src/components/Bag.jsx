import React from "react";
import styled, { css } from "styled-components";
import { white } from "../globalStyles";

const Bag = ({ title, children, numberElements }) => {
  console.log(numberElements);

  return (
    <Container numberElements={numberElements}>
      <TitleLabel>{title}</TitleLabel>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

Bag.defaultProps = {
  numberElements: 0,
};

const Container = styled.div`
  width: 70%;
  margin: 2% 16% 2% 16%;
  padding-bottom: 40px;

  background-color: ${white};
  ${(props) => {
    if (props.numberElements > 5) {
      return css`
        padding-bottom: 40px;
      `;
    } else
      return css`
        height: 600px;
      `;
  }};
`;

const TitleLabel = styled.div`
  padding: 36px 0px 0px 28px;
  font-size: 30px;
`;

const ChildrenContainer = styled.div`
  width: 600px;
  margin: 0 auto;
`;

export default Bag;
