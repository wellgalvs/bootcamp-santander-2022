/*
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

let alunos = [
  {
    nome: 'A1',
    nota: 8,
    turma: '2A'
  },
  {
    nome: 'A2',
    nota: 4,
    turma: '2B'
  },
  {
    nome: 'A3',
    nota: 10,
    turma: '3A'
  }
];

function alunosAprovados(alunos, media) {
  let alunosAprov = [];

  for (let i = 0; i < alunos.length; i++) {
    let { nome, nota } = alunos[i];

    if (nota >= media) {
      alunosAprov.push(nome);
    }
  }

  return alunosAprov;
}

console.log(alunosAprovados(alunos, 5));