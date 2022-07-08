"use strict";
let valorAny;
valorAny = 3;
valorAny = "texto";
valorAny = true;
let valorString = 'Teste';
valorString = valorAny;
let valorString2 = 'Testando';
valorString2 = valorAny;
function somarStrings(str1, str2) {
    console.log(str1 + str2);
}
somarStrings(valorString, valorString2);
somarStrings('Olá, ', ' como vai?');
