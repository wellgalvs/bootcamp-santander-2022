interface IAnimal {
  name: string;
  type: 'terrestre' | 'aquático';
  executeRoar?(altDecibeis: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  name: 'Leão',
  type: 'terrestre',
  executeRoar: (altDecibeis) => (`${altDecibeis} dB`)
}

const felino: IFelino = {
  name: 'Gato',
  type: 'terrestre',
  visaoNoturna: true,
}