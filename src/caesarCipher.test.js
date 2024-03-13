import { caesarCipher } from "./caesarCipher.js";

describe("Caesar Cipher", () => {
  it("hello world", () => {
    const text = "hello world";
    const shiftValue = 1;
    expect(caesarCipher(text, shiftValue)).toBe("ifmmp xpsme");
  });

  it("Works with different shift values", () => {
    const text = "hello world";
    const shiftValue = 20;
    expect(caesarCipher(text, shiftValue)).toBe("byffi qilfx");
  });

  it("Will handle case", () => {
    const text = "ExCusE Me Who ARe YoU";
    const shiftValue = 8;
    expect(caesarCipher(text, shiftValue)).toBe("MfKcaM Um Epw IZm GwC");
  });

  it("Will handle overflow shift values", () => {
    const text = "I am a boy";
    const shiftValue = 27;
    expect(caesarCipher(text, shiftValue)).toBe("J bn b cpz");
  });

  it("Will handle punctuation", () => {
    const text = "Do you know who I am? I am !!!!! &#";
    const shiftValue = 12;
    expect(caesarCipher(text, shiftValue)).toBe(
      "Pa kag wzai ita U my? U my !!!!! &#"
    );
  });
});
