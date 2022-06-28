/*
 * Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], 
 * retorne outro array apenas com valores únicos.
 */

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(array) {
  let uniqueElements = new Set(array);

  return [...uniqueElements];
}

console.log(uniqueValues(array));