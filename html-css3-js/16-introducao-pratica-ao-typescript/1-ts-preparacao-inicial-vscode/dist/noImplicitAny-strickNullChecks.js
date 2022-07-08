"use strict";
let buttonTeste = document.getElementById('button');
/*function somarImplicito(params1, params2) {
  return params1 + params2;
}*/
// "?" -> verificador
buttonTeste === null || buttonTeste === void 0 ? void 0 : buttonTeste.addEventListener('click', () => {
    console.log('Clicou!');
});
