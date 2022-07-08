let anyValue: any;
anyValue = 3;
anyValue = "teste";
anyValue = 5;

let stringTest: string = 'verificar';
stringTest = anyValue;

let unknownValue: unknown;
unknownValue = 3;
unknownValue = 'Olá';
unknownValue = true;
unknownValue = "teste unknown";

let stringTest2: string = 'Agora vai!'
// stringTest2 = unknownValue;

if (typeof unknownValue === 'string') {
  stringTest2 = unknownValue;
}