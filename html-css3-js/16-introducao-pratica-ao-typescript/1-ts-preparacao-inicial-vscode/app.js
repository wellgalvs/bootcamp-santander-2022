"use strict";
let buttonTeste = document.getElementById('button');
// "?" -> verificador
buttonTeste === null || buttonTeste === void 0 ? void 0 : buttonTeste.addEventListener('click', () => {
    console.log('Clicou!');
});
