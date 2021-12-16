import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

test("Render Button with text", () => {
  const text = "boton";

  const component = render(<Button text={text} />);
  component.getByText("boton");
  component.debug();
});

test("Render Button with text and onClick", () => {
  const text = "boton";

  const component = render(<Button text={text} />);
  component.getByText("boton");
});
