export function caesarCipher(text, shiftValue) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphaSplit = alphabet.split("");

  const adjustedShift = shiftValue % alphabet.length;
  const shiftedFront = alphaSplit.slice(adjustedShift);
  const shiftedBack = alphaSplit.slice(0, adjustedShift);
  const shiftedAlpha = shiftedFront.concat(shiftedBack);

  let cipher = "";
  text.split("").forEach((char) => {
    const alphabetIndex = alphaSplit.findIndex(
      (baseChar) => baseChar === char.toLowerCase()
    );

    if (alphabetIndex === -1) {
      cipher += char;
    } else if (isUpperCase(char)) {
      cipher += shiftedAlpha[alphabetIndex].toUpperCase();
    } else {
      cipher += shiftedAlpha[alphabetIndex];
    }
  });
  return cipher;
}

function isUpperCase(char) {
  if (typeof char !== "string") return;
  if (char.length !== 1) return;

  return char === char.toUpperCase();
}
