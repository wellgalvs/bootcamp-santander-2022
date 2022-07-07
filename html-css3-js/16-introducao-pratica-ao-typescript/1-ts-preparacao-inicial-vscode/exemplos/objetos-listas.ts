const pessoa = {
  nome: 'Mariana',
  idade: 28,
  profissao: 'Médica'
}

const joaozinho: { nome: string, idade: number, profissao: string } = {
  nome: 'Joaozinho',
  idade: 25,
  profissao: 'Designer'
}

const paula: { nome: string, idade: number, profissao: string } = {
  nome: 'Paula',
  idade: 27,
  profissao: 'Desenvolvedora'
}

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  Designer,
  Médica
}

interface IPessoa {
  nome: string,
  idade: number,
  profissao?: Profissao
}

interface IEstudante extends IPessoa {
  materiais: string[]
}

const vanessa: IPessoa = {
  nome: 'Vanessa',
  idade: 29,
  profissao: Profissao.Desenvolvedora
}

const jessica: IEstudante = {
  nome: 'Jessica',
  idade: 29,
  profissao: Profissao.Desenvolvedora,
  materiais: ['Cáculo I e II', 'Programação Linear']
}

function listar(lista: string[]) {
  for (const item of lista) {
    console.log('- ', item);
  }
}

listar(jessica.materiais);