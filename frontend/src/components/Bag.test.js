import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { prettyDOM } from "@testing-library/dom";
import Bag from "./Bag";
import Card from "./Card";

test("Render Bag with just title", () => {
  const title = "hola";

  const component = render(<Bag title={title} />);
  component.getByText("hola");
});

test("Render Bag with just title and children", () => {
  const title = "hola";

  const card = <Card text={"aaa"} palindrome={true}></Card>;
  const component = render(<Bag title={title} children={card} />);
  component.getByText("hola");
  component.getByText("Text: aaa");
  component.getByText("Palindrome: true");
});

test("Render Bag and find div", () => {
  const title = "hola";

  const card = <Card text={"aaa"} palindrome={true}></Card>;
  const component = render(<Bag title={title} children={card} />);
  const div = component.container.querySelector("div");
  console.log(prettyDOM(div));
});
