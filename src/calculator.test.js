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

  describe("Divide tests", () => {
    it("Will divide 10 / 2", () => {
      expect(calc.divide(10, 2)).toBe(5);
    });
    it("Handle decimals", () => {
      expect(calc.divide(10.5, 2)).toBeCloseTo(5.25);
    });
    it("Will deal with one negative number", () => {
      expect(calc.divide(10, -20)).toBeCloseTo(-0.5);
    });
    it("Will deal with two negative numbers", () => {
      expect(calc.divide(-20, -20)).toBeCloseTo(1);
    });
    it("Can handle zero", () => {
      expect(calc.divide(10, 0)).toBe(Infinity);
    });
  });
});
