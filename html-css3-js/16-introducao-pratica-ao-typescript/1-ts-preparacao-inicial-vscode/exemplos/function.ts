function printaValores(n1: number, n2: number): void {
  console.log(n1 + n2);
}

// a função recebe 2 números e um callback que recebe e retornará um num

function somarValoresNumETratar(
  n1: number,
  n2: number,
  callback: (numero: number) => number): number {
  let resultado = n1 + n2;

  return callback(resultado);
}

function aoQuadrado(numero: number): number {
  return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {
  return numero / numero;
}

console.log(somarValoresNumETratar(1, 2, aoQuadrado));
console.log(somarValoresNumETratar(1, 2, dividirPorEleMesmo));
