// Como podemos melhorar o esse código usando TS? 

interface IPerson {
  name: string;
  age: number;
  occupation: Occupation;
}

enum Occupation {
  Atriz,
  Padeiro,
}

let pessoa1 = {} as IPerson;
pessoa1.name = "maria";
pessoa1.age = 29;
occupation: Occupation.Atriz;

let pessoa2 = {} as IPerson;
pessoa2.name = "roberto";
pessoa2.age = 19;
Occupation: Occupation.Padeiro;

let pessoa3: IPerson = {
  name: "laura",
  age: 32,
  occupation: Occupation.Atriz,
};

let pessoa4: IPerson = {
  name: "carlos",
  age: 19,
  occupation: Occupation.Padeiro,
}