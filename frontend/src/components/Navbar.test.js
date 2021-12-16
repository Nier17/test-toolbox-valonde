import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import Input from "./Navbar";
import Button from "./Navbar";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

describe("<Navbar></Navbar>", () => {
  // const url = "http://localhost:3001/iecho?text=";

  test("render navbar ", () => {
    const component = render(
      <div style={{ width: 200, height: 200 }}>
        <Navbar
          children={<Input text={"Insert text"} onChange={(e) => {}}></Input>}
          children2={<Button text={"Send"} onClick={() => {}}></Button>}
        ></Navbar>
      </div>
    );
    const button = component.getByText("Send");
    fireEvent.click(button);
    const result = component.getByText("aloh");
    expect(result).toHaveStyle("display:block");
  });
});
