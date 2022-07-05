interface IAnimal {
  name: string;
  type: 'terrestre' | 'aquático';
  domestic: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  size: 'pequeno' | 'medio' | 'grande';
}

type IDomestic = ICanino | IFelino;

const animal: IDomestic = {
  domestic: true,
  name: 'Dog',
  type: 'terrestre',
  size: "medio",
}