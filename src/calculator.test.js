import { calculator as calc } from "./calculator.js";

describe("Calculator Tests", () => {
  describe("Adding tests", () => {
    it("Will add 2 + 2", () => {
      expect(calc.add(2, 2)).toBe(4);
    });

    it("Will add 3 + -10", () => {
      expect(calc.add(3, -10)).toBe(-7);
    });
  });

  describe("Subtract tests", () => {
    it("Will minus 1 - 1", () => {
      expect(calc.subtract(1, 1)).toBe(0);
    });

    it("Will minus 10 - -1", () => {
      expect(calc.subtract(10, -1)).toBe(11);
    });
  });
});
