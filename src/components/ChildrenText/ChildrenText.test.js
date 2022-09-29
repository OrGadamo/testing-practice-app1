import ChildrenText from "./ChildrenText";
import { render, screen } from "@testing-library/react";
describe("tests for ChildrenText component", () => {
  test("return jsx with text", () => {
    render(<ChildrenText />);
    const linkElement = screen.getByText("Hello Children");
    expect(linkElement).toBeInTheDocument();
  });
  test("return span specific id with text", () => {
    render(<ChildrenText />);
    const linkElement = screen.getByTestId("children_txt");
    expect(linkElement.innerHTML).toEqual("Hello Children");
  });
  test("check for element in component", () => {
    render(<ChildrenText />);
    const linkElement = screen.getByTestId("children_txt");
    expect(linkElement).toBeInTheDocument();
  });
  test("is class name valid", () => {
    render(<ChildrenText />);
    const linkElement = screen.getByTestId("children_txt");
    expect(linkElement).toHaveClass("span-text");
  });
  test("return span text color red", () => {
    render(<ChildrenText />);
    const linkElement = screen.getByTestId("children_txt");
    expect(linkElement).toHaveProperty("color", "red");
  });
  test("return apropriate length text", () => {
    render(<ChildrenText />);
    const linkElement = screen.getByTestId("children_txt");
    expect(linkElement.innerHTML.length).toEqual(14);
  });
  test("test for only english chars", () => {
    render(<ChildrenText />);
    const linkElement = screen.getByTestId("children_txt");
    expect(/^[A-Za-z\s]*$/.test(linkElement.innerHTML)).toEqual(true);
  });
});
