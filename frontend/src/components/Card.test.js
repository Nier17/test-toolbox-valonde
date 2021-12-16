import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

describe("<Component></Component>", () => {
  var component;

  beforeEach(() => {
    component = render(<Card text={"hola"} palindrome={false}></Card>);
  });
  test("render card ", () => {
    const el = component.getByText("Palindrome: false");
    expect(el).toHaveStyle("display:block");
  });
});
