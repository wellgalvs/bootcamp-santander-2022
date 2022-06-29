/*
 * Some todos os números de um array
 * Crie uma função que recebe uma lista de preços e um número representando 
 * o saldo disponível. Calcule qual será o saldo final após subtrair todos 
 * os preços da lista enviada.
 */

const arr = [2, 3, 4, 5, 6];

function sumNumbers(arr) {
  return arr.reduce(function (previous, current) {
    return previous + current;
  });
}

console.log(sumNumbers(arr));

const list = [
  {
    name: "prod1",
    value: 4
  },
  {
    name: "prod2",
    value: 3
  },
  {
    name: "prod3",
    value: 8
  }
]

const balance = 100;

function calcBalance(balance, list) {
  return list.reduce(function (previous, current, index) {
    // console.log("Rodada: ", index + 1);
    // console.log({ previous });
    // console.log({ current });
    return previous - current.value;
  }, balance);
}

console.log(calcBalance(balance, list));