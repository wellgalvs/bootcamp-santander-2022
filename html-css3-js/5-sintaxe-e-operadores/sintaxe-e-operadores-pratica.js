/* 
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". 
EX: Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
*/

function compareNumbers(num1, num2) {
  const partOne = firstStr(num1, num2);
  const partTwo = secondStr(num1, num2);

  return `${partOne} ${partTwo}`;
}

function firstStr(num1, num2) {
  let partOne = `Os números ${num1} e ${num2}`
  let yesNo = "não";

  if (num1 === num2) {
    yesNo = "";
  }

  return `${partOne} ${yesNo} são iguais.`;
}

function secondStr(num1, num2) {
  const soma = num1 + num2;
  let dez = 'menor';
  let vinte = 'menor';

  if (soma > 10) {
    dez = "maior";
  }

  if (soma > 20) {
    vinte = "maior";
  }

  return `Sua soma é ${soma}, que é ${dez} do que 10 e ${vinte} do que 20.`;
}

console.log(compareNumbers(10, 12))
