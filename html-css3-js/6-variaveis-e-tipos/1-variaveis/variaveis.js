/* Hoisting
numberOne = 1;

console.log(numberOne + 1);

var numberOne;
*/

var firstName = "João";
let lastName = "jr."

if (firstName === "João") {
  let lastName = "Rodrigues";
  var firstName = "Pedro";
  lastName = "Silva";

  console.log(lastName);
}

console.log(firstName, lastName);