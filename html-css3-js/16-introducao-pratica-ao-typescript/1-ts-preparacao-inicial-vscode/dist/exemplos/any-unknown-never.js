"use strict";
let anyValue;
anyValue = 3;
anyValue = "teste";
anyValue = 5;
let stringTest = 'verificar';
stringTest = anyValue;
let unknownValue;
unknownValue = 3;
unknownValue = 'Olá';
unknownValue = true;
unknownValue = "teste unknown";
let stringTest2 = 'Agora vai!';
// stringTest2 = unknownValue;
if (typeof unknownValue === 'string') {
    stringTest2 = unknownValue;
}
// o unknown necessita de validação para ter sua atribuição aceita, o any não
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
// never é um código que nunca foi interrompido
jogaErro('Deu ruim!', 500);
