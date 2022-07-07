let valorAny: any;
valorAny = 3;
valorAny = "texto";
valorAny = true;

let valorString: string = 'Teste';
valorString = valorAny;
let valorString2: string = 'Testando';
valorString2 = valorAny;

function somarStrings(str1: string, str2: string) {
  console.log(str1 + str2);
}

somarStrings(valorString, valorString2);
somarStrings('Olá, ', ' como vai?');