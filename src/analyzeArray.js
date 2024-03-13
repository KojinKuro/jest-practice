export function analyzeArray(array) {
  return {
    average: average(array),
    min: min(array),
    max: max(array),
  };
}

function average(array) {
  const sumOfArray = array.reduce((prev, cur) => prev + cur, 0);
  return sumOfArray / array.length;
}

function min(array) {
  return Math.min(...array);
}

function max(array) {
  return Math.max(...array);
}
