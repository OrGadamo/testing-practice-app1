import Grade from "./Grade";
import { render, screen } from "@testing-library/react";
describe("tests for Grade component", () => {
  test("return valid children Number as h1", () => {
    render(<Grade childrenNum={10} />);
    const checkElement = screen.getByTestId("h1_children_num");
    expect(checkElement.innerHTML).toEqual("10");
  });
  test("return valid class name as h1", () => {
    render(<Grade className={"Tigers"} />);
    const checkElement = screen.getByTestId("h1_class_name");
    expect(checkElement.innerHTML).toEqual("Tigers");
  });
  test("return valid teacher name as h1", () => {
    render(<Grade teacher={"JCole"} />);
    const checkElement = screen.getByTestId("h1_teacher_name");
    expect(checkElement.innerHTML).toEqual("JCole");
  });
});
