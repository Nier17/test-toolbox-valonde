import React from "react";
import styled from "styled-components";
import { gray1 } from "./globalStyles";
import Board from "./boards/Board";
import Input from "./components/Input";
import Form from "react-bootstrap/Form";

import "./App.css";

export default function App() {
  return (
    <div>
      <Board></Board>

      {/* <Input></Input> */}
      {/* <Navbar>hola</Navbar>
      <Bag title={"Results"}></Bag> */}
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 99vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  /* background-color: ${gray1}; */
`;
