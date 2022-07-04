import { mostraIdade, mostraCidade, mostraHobby } from "./funcoes.mjs";

const btn = document.getElementById("myBtn");
const body = document.getElementsByTagName("body")[0];

const listener = function () {
  btn.addEventListener("click", async () => {
    const { paintRed } = await import('./funcoes.mjs');

    paintRed(body);
  });
}

listener();

console.log(mostraIdade("Wellington", 29));
console.log(mostraCidade("Wellington", "SP"));
console.log(mostraHobby("Wellington", "Violão")); 