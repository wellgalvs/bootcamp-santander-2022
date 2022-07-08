"use strict";
function printaValores(n1, n2) {
    console.log(n1 + n2);
}
// a função recebe 2 números e um callback que recebe e retornará um num
function somarValoresNumETratar(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumETratar(1, 2, aoQuadrado));
console.log(somarValoresNumETratar(1, 2, dividirPorEleMesmo));
