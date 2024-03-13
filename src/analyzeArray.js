export function analyzeArray(array) {
  return {
    average: average(array),
  };
}

function average(array) {
  const sumOfArray = array.reduce((prev, cur) => prev + cur, 0);
  return sumOfArray / array.length;
}
