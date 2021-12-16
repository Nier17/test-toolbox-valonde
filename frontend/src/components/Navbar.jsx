import React from "react";
import styled, { css } from "styled-components";
import { bgPrimary, bgSecondary } from "../globalStyles";
import Input from "./Input";

const Navbar = ({ color, children }) => {
  return (
    <Container color={color}>
      <InputContainer>{children}</InputContainer>
    </Container>
  );
};

Navbar.defaultProps = {
  color: "primary",
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  ${(props) => {
    if (props.color === "primary")
      return css`
        background-color: ${bgPrimary};
      `;
    else if (props.color === "secondary")
      return css`
        background-color: ${bgSecondary};
      `;
  }};
`;

const InputContainer = styled.div`
  width: 40%;
  display: flex;
  margin: 0 auto;
  padding-top: 20px;
`;

export default Navbar;
