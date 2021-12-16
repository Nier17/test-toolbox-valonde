import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";
import { bgSecondary } from "../globalStyles";

const Button = ({ text, onClick }) => {
  return (
    <Container>
      <StyledButton variant="primary" onClick={onClick}>
        {text}
      </StyledButton>
    </Container>
  );
};

const StyledButton = styled(BootstrapButton)`
  background-color: ${bgSecondary};
  padding-left: 40px;
  padding-right: 40px;
`;

const Container = styled.div`
`;

export default Button;
