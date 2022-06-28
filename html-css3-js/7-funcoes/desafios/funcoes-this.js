/*
  Dada a função calculaIdade, utilize os métodos call e apply para modificar o 
  valor de this. Crie seus próprios objetos para esta atividade!
*/

const person1 = {
  name: 'P1',
  age: 29,
};

const person2 = {
  name: 'P2',
  age: 19,
};

function calculaIdade(years) {
  return `Daqui a ${years} anos, ${this.name} 
  terá ${this.age + years} anos de idade!`;
}

console.log(calculaIdade.call(person1, 10));
console.log(calculaIdade.apply(person2, [10]));