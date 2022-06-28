/*
Crie uma função que retorna o nome dos membros de um Map que tem 
o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. 
(Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com 
os nomes dos usuários que são administradores.
*/

const getAdmins = (myMap) => {
  let isAdm = [];

  for ([key, value] of myMap) {
    if (value === "admin") {
      isAdm.push(key);
    }
  }

  return isAdm;
}

const myMap = new Map();

myMap.set("user1", "admin");
myMap.set("user2", "user");
myMap.set("user3", "admin");
myMap.set("user4", "user");
myMap.set("user5", "user");

console.log(getAdmins(myMap));