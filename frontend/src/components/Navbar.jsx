import React from "react";
import styled, { css } from "styled-components";
import { bgPrimary, bgSecondary } from "../globalStyles";
// import Button from "./Button";
const Navbar = ({ color, children, children2 }) => {
  return (
    <Container color={color}>
      <InputContainer>
        {children}
        {children2}
        {/* {children && <Button text={"Send"}></Button>} */}
      </InputContainer>
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
  /* width: 56%; */
  width: 1000px;
  display: flex;
  margin: 0 auto;
  padding-top: 20px;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    width: 500px;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    width: 360px;
    justify-content: space-between;
  }
`;

export default Navbar;
