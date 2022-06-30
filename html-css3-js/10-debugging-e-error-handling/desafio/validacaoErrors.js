/*
 * Crie uma função que recebe um array e um número
 * Realize as seguintes validações
 * Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
 * Se o array não for do tipo 'object', lance um erro do tipo TypeError
 * Se o número não for do tipo 'number', lance um erro do tipo TypeError
 * Se o tamanho do array for diferente do número enviado como parâmetro, 
 * lance um erro do tipo RangeError
 * Utilize a declaração try...catch
 * Filtre as chamadas de catch por cada tipo de erro 
 * utilizando o operador instanceof
 */

function validateArray(array, number) {
  try {
    if (!array && !number) throw new ReferenceError("Envie os Parâmetros!");

    if (typeof array !== "object") throw new TypeError(
      "Array Precisa ser do Tipo Object"
    );

    if (typeof number !== "number") throw new TypeError(
      "Number Precisa ser do Tipo Number"
    );

    if (array.length !== number) throw new RangeError(
      "Tamanho Inválido!"
    );

    return array;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este é um ReferenceError");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este é um TypeError");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este é um RangeError");
      console.log(e.message);
    } else {
      console.log("Erro não esperado: " + e);
    }
  }
}

console.log(validateArray([1, 2, 3, 4, 5], 5));