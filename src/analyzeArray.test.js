import { analyzeArray } from "./analyzeArray.js";

describe("Analyze Array", () => {
  const numbers = [1, 8, 3, 5, 2, 6];
  const numbers2 = [5, 7, 0, 3];

  it("Take average", () => {
    expect(analyzeArray(numbers).average).toBeCloseTo(4.166);
  });

  it("Take average of different array", () => {
    expect(analyzeArray(numbers2).average).toBeCloseTo(3.75);
  });

  it("Take min", () => {
    expect(analyzeArray(numbers).min).toBe(1);
  });

  it("Take min of different array", () => {
    expect(analyzeArray(numbers2).min).toBe(0);
  });

  it("Take max", () => {
    expect(analyzeArray(numbers).max).toBe(8);
  });

  it("Take max of different array", () => {
    expect(analyzeArray(numbers2).max).toBe(7);
  });

  it("Finds length", () => {
    expect(analyzeArray(numbers).length).toBe(6);
  });

  it("Finds length of different array", () => {
    expect(analyzeArray(numbers2).length).toBe(4);
  });
});
