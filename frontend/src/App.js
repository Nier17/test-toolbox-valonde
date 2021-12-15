import React from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Navbar>hola</Navbar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: violet;
`;
