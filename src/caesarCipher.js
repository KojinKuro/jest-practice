export function caesarCipher(text, shiftValue) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const adjustedShift = shiftValue % alphabet.length;
  const shiftedFront = alphabet.slice(adjustedShift);
  const shiftedBack = alphabet.slice(0, adjustedShift);
  const shiftedAlpha = shiftedFront.concat(shiftedBack);

  let cipher = "";
  text.split("").forEach((textChar) => {
    const index = alphabet.findIndex(
      (alphabetChar) => alphabetChar === textChar.toLowerCase()
    );

    if (index === -1) {
      cipher += textChar;
      return;
    }

    cipher += isUpperCase(textChar)
      ? shiftedAlpha[index].toUpperCase()
      : shiftedAlpha[index];
  });
  return cipher;
}

function isUpperCase(char) {
  if (typeof char !== "string") return;
  if (char.length !== 1) return;

  return char === char.toUpperCase();
}
