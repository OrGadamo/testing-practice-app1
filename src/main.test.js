// import { getName } from "./main";
// it("expect to return mt name", () => {
//   expect(getName()).toBe("Or Gadamo");
// });
// it("expect not to return Aviel Taka", () => {
//   expect(getName()).not.toBe("Aviel Taka");
// });
// import { getWelcomeMessage } from "./main";
// it("expext to return valid message", () => {
//   expect(getWelcomeMessage()).toBe("Hello Or");
// });
// it("expect not to return 'hi there'", () => {
//   expect(getWelcomeMessage()).not.toBe("hi there");
// });
// it("expect not to return a number", () => {
//   expect(typeof getWelcomeMessage()).not.toBe("number");
// });
// it("expect not to return a boolean", () => {
//   expect(typeof getWelcomeMessage()).not.toBe("boolean");
// });
// it("expect to return a string", () => {
//   expect(typeof getWelcomeMessage()).toBe("string");
// });
// it("provide parameter expect to return valid message", () => {
//   expect(getWelcomeMessage("Jhon")).toBe("Hello Or");
// });
// it("provide parameter expect to not return Hello Jhon", () => {
//   expect(getWelcomeMessage("Jhon")).not.toBe("Hello Jhon");
// });
import { getMaxNumber, getDivide, getMinNumber, getNumbersAvg } from "./main";
describe("tests for getMaxNumber function", () => {
  it("return max number with valid parameters", () => {
    expect(getMaxNumber(1, 2)).toBe(2);
  });
  it("not return min number with valid parameters", () => {
    expect(getMaxNumber(1, 2)).not.toBe(1);
  });
});
describe("tests for getDivide function", () => {
  it("return result of num1 divided by num2", () => {
    expect(getDivide(4, 2)).toBe(2);
  });
  it("not return result of num2 divided by num1", () => {
    expect(getDivide(4, 2)).not.toBe(0.5);
  });
});
describe("tests fot getMinNumber function", () => {
  it("return min number", () => {
    expect(getMinNumber(1, 2, 3)).toBe(1);
  });
  it("not return max number", () => {
    expect(getMinNumber(1, 2, 3)).not.toBe(3);
  });
});
describe("tests for getNumbersAvg", () => {
  it("return valid avrage", () => {
    expect(getNumbersAvg(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(4.5);
  });
  it("not return sum of numbers", () => {
    expect(getNumbersAvg(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)).not.toBe(45);
  });
});
