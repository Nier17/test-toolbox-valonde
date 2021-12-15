import React from "react";
import styled, { css } from "styled-components";
import { white } from "../globalStyles";

const Bag = ({ title, children }) => {
  return (
    <Container>
      <TitleLabel>{title}</TitleLabel>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  height: 600px;
  /* margin: 40px 0px 0px 300px; */
  margin: 2% 16% 2% 16%;
  background-color: ${white};
`;

const TitleLabel = styled.div`
  padding: 36px 0px 0px 28px;
  font-size: 30px;
  font-weight: bold;
`;

export default Bag;
