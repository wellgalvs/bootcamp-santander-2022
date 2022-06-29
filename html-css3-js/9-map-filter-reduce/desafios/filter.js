/*
 * Filtre e retorne todos os números pares de um array.
 */

const arr = [2, 9, 14, 31, 36, 43, 51, 98];

function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
}

console.log(filtraPares(arr));