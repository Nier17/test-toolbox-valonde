import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

const Input = ({ placeholder, text, type, value, onChange }) => {
  return (
    <Container>
      <>
        <Form.Control
          type="text"
          placeholder={text}
          value={value}
          onChange={onChange}
        />
      </>
    </Container>
  );
};

const Container = styled.div`
  width: 700px;
`;
export default Input;
