interface ICachorro {
  name: string;
  idade: number;
  parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
  readonly [K in keyof ICachorro]: ICachorro[K];
}
/*
class MeuCachorro implements CachorroSomenteLeitura {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Dog', 13);
*/