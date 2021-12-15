import React from "react";
import styled, { css } from "styled-components";
import { bgPrimary, bgSecondary } from "../globalStyles";

const Navbar = ({ color }) => {
  return <Container color={color}></Container>;
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

export default Navbar;
