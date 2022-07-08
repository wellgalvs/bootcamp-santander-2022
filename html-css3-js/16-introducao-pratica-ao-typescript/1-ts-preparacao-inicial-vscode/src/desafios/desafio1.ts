// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface IEmployee {
  code: number;
  name: string;
}

let employee1: IEmployee = {
  code: 10,
  name: 'Jhon'
}

console.log(employee1);