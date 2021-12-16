import React from "react";
import Navbar from "../components/Navbar";
import Bag from "../components/Bag";
import Input from "../components/Input";

const Board = () => {
  return (
    <div>
      <Navbar children={<Input text={"Insert text"}></Input>}></Navbar>

      <Bag title={"Results:"}></Bag>
    </div>
  );
};

export default Board;
