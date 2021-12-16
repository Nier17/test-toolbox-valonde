import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Bag from "../components/Bag";
import Input from "../components/Input";
import axios from "axios";
import Button from "../components/Button";
import Card from "../components/Card";
import { useImmer } from "use-immer";

const url = "http://localhost:3001/iecho?text=";

const Board = () => {
  const [data, setData] = useImmer([]);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [test, setTest] = useState(1);

  function getData() {
    var newUrl = url + searchText;
    axios.get(newUrl).then((res) => {
      setData((draft) => {
        draft.push(res.data);
        draft.reverse();
      });
    });
  }
  useEffect(() => {}, [data]);
  return (
    <div>
      <Navbar
        children={
          <Input
            placeholder={"Insert text"}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></Input>
        }
        children2={<Button text={"Send"} onClick={() => getData()}></Button>}
      ></Navbar>

      <Bag
        title={"Results:"}
        children={data.map((e, index) => (
          <Card key={index} text={e.text} palindrome={e.palindrome}></Card>
        ))}
        numberElements={data.length}
      ></Bag>
    </div>
  );
};

export default Board;
