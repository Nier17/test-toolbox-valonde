import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <Container>
      <>
        <Form.Control
          type="text"
          placeholder={placeholder}
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
