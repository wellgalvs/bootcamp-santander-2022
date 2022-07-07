"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somarNumeros(n1, n2, devePrintar, frase) {
    let resultado = n1 + n2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return resultado;
}
let devePrintar = true;
let frase = "O valor é ";
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            somarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase);
        }
    });
}
