import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";
import { bgSecondary } from "../globalStyles";

const Button = ({ text }) => {
  return (
    <Container>
      <StyledButton variant="primary">{text}</StyledButton>
    </Container>
  );
};

const StyledButton = styled(BootstrapButton)`
  background-color: ${bgSecondary};
  padding-left: 20px;
  padding-right: 20px;

  /* width: 100px; */
`;

const Container = styled.div`
  /* width: 1px; */
`;

export default Button;
