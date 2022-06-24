// Solução 1
function verificaPalindromo(str) {
  if (!str) return "Digite uma string válida!";

  return str.split("").reverse().join("") === str;
}

console.log(verificaPalindromo("ama"));

function verificaPalindromo2(str) {
  if (!str) return "Digite uma string válida!";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(verificaPalindromo2("ovoo"));