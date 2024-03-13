export function caesarCipher(text, shiftValue) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const adjustedShift = shiftValue % alphabet.length;

  const alphabetFront = alphabet.slice(adjustedShift);
  const alphabetBack = alphabet.slice(0, adjustedShift);
  const caesarAlphabet = alphabetFront.concat(alphabetBack);

  const cipher = [];
  text.split("").forEach((char) => {
    const index = alphabet.findIndex(
      (searchChar) => searchChar === char.toLowerCase()
    );

    let cipherChar = index !== -1 ? caesarAlphabet[index] : char;
    if (isUpperCase(char)) cipherChar = cipherChar.toUpperCase();
    cipher.push(cipherChar);
  });

  return cipher.join("");
}

function isUpperCase(char) {
  if (typeof char !== "string") return;
  if (char.length !== 1) return;
  return char === char.toUpperCase();
}
