"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Médica'
};
const joaozinho = {
    nome: 'Joaozinho',
    idade: 25,
    profissao: 'Designer'
};
const paula = {
    nome: 'Paula',
    idade: 27,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Designer"] = 3] = "Designer";
    Profissao[Profissao["M\u00E9dica"] = 4] = "M\u00E9dica";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 29,
    profissao: Profissao.Desenvolvedora,
    materiais: ['Cáculo I e II', 'Programação Linear']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(jessica.materiais);
