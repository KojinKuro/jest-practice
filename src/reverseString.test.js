import { reverseString } from "./reverseString.js";

describe("Reverse String Test", () => {
  it("Should convert 'billy bob' to 'bob yllib'", () => {
    const string = "billy bob";
    expect(reverseString(string)).toBe("bob yllib");
  });

  it("Should convert 'mandy' to 'ydnam'", () => {
    const string = "mandy";
    expect(reverseString(string)).toBe("ydnam");
  });
});
