let count = 0;

let btnIncrement = document.querySelector('.btnIncrement');
let btnDecrement = document.querySelector('.btnDecrement');

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
  count++;
  CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
  count--;
  CURRENT_NUMBER.innerHTML = count;
}

btnIncrement.addEventListener('click', increment);

btnDecrement.addEventListener('click', decrement); 