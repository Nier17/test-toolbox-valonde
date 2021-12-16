import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

const Input = ({ placeholder, text, type }) => {
  return (
    <Container>
      <>
        <Form.Control type="text" placeholder="Normal text" />
      </>
    </Container>
  );
};

const Container = styled.div``;
export default Input;
