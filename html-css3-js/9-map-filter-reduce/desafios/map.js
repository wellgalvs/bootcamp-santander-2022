/*
 * Pratique a sintaxe de multiplicação de números, uma vez 
 * utilizando o parâmetro this de um objeto criado por você, 
 * e depois sem ele.
 */

const apple = {
  value: 2,
}

const orange = {
  value: 3,
}

const nums = [1, 2];

function mapThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

console.log('this -> maçã ', mapThis(nums, apple));
console.log('this -> laranja', mapThis(nums, orange));

const nums2 = [2, 4, 6, 8, 10];

function mapNoThis(arr) {
  return arr.map(function (item) {
    return item * 2;
  });
}

console.log(mapNoThis(nums2));