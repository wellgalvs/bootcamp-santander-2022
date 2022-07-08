let buttonTeste = document.getElementById('button');

/*function somarImplicito(params1, params2) {
  return params1 + params2;
}*/

// "?" -> verificador
buttonTeste?.addEventListener('click', () => {
  console.log('Clicou!');
})