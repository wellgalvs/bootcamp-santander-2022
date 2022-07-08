type input = number | string;

function somarValores(input1: string | number, input2: string | number) {
  if (typeof input1 === 'string' || typeof input2 === 'string') {
    return input1.toString() + input2.toString();
  } else {
    return input1 + input2;
  }
}

console.log(somarValores(1, 5));
console.log(somarValores('Olá, ', 'tudo bem?'));
console.log(somarValores('Hoje é dia ', 5));