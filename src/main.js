// export function getName() {
//   return "Or Gadamo";
// }
// export const getWelcomeMessage = () => {
//   return "Hello Or";
// };
export const getMaxNumber = (num1, num2) => {
  return Math.max(num1, num2);
};
export const getDivide = (num1, num2) => {
  return num1 / num2;
};
export const getMinNumber = (num1, num2, num3) => {
  return Math.min(num1, num2, num3);
};
export const getNumbersAvg = (...numArr) => {
  return numArr.reduce((prev, current) => prev + current, 0) / numArr.length;
};
