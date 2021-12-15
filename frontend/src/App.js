import React from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { gray1 } from "./globalStyles";
import Bag from "./components/Bag";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar>hola</Navbar>
      <Bag title={"Results"}></Bag>
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
