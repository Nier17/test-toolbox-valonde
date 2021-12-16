import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

const Input = ({ placeholder, text, type }) => {
  return (
    <Container>
      <>
        <Form.Control type="text" placeholder={text} />
      </>
    </Container>
  );
};

const Container = styled.div`
  width: 700px;
`;
export default Input;
