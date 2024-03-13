import { caesarCipher } from "./caesarCipher.js";

describe("Caesar Cipher", () => {
  it("Hello world", () => {
    const text = "Hello world";
    const shiftValue = 1;
    expect(caesarCipher(text, shiftValue)).toBe("Ifmmp xpsme");
  });

  it("Works with different shift values", () => {
    const text = "Hello world";
    const shiftValue = 20;
    expect(caesarCipher(text, shiftValue)).toBe("Byffi qilfx");
  });

  it("Will handle overflow shift values", () => {
    const text = "I am a boy";
    const shiftValue = 27;
    expect(caesarCipher(text, shiftValue)).toBe("J bn b cpz");
  });
});
