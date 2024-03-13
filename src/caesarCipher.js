export function caesarCipher(text, shiftValue) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const caesarAlphabet = createCaesarAlphabet(alphabet, shiftValue);

  const cipher = [];
  text.split("").forEach((char) => {
    const charLower = char.toLowerCase();
    const index = alphabet.findIndex((searchChar) => searchChar === charLower);

    let cipherChar = index !== -1 ? caesarAlphabet[index] : char;
    if (isUpperCase(char)) cipherChar = cipherChar.toUpperCase();
    cipher.push(cipherChar);
  });
  return cipher.join("");
}

function createCaesarAlphabet(letters, shiftValue) {
  const alphabet = typeof letters == "string" ? letters.split("") : letters;
  const adjustedShiftValue = shiftValue % alphabet.length;

  const alphabetFront = alphabet.slice(adjustedShiftValue);
  const alphabetBack = alphabet.slice(0, adjustedShiftValue);
  return alphabetFront.concat(alphabetBack);
}

function isUpperCase(char) {
  if (typeof char !== "string") return;
  if (char.length !== 1) return;
  return char === char.toUpperCase();
}
