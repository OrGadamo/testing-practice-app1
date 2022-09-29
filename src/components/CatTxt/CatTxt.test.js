import CatTxt from "./CatTxt";
import ReactDOM from "react-dom";
describe("tests for CatTxt function component", () => {
  it("return div with h1- Hello cat", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CatTxt />, div);
    expect(div.innerHTML).toBe(`<div class="cat-txt"><h1>Hello Cat</h1></div>`);
  });
  it("not return div with h1- Hello dog", () => {
    const div = document.createElement("div");
    ReactDOM.createRoot(div).render(<CatTxt />);
    expect(div.innerHTML).not.toBe(
      `<div class="cat-txt"><h1>Hello Dog</h1></div>`
    );
  });
});
