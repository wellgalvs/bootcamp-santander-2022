let count = 0;

let btnIncrement = document.querySelector('.btnIncrement');
let btnDecrement = document.querySelector('.btnDecrement');

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
  count++;
  if (CURRENT_NUMBER > 10) {
    btnIncrement.disabled = true;
  }

  if (count == 11) {
    count--;
  }

  btnIncrement.disabled = false;

  CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
  count--;
  if (CURRENT_NUMBER < 0) {
    btnDecrement.disabled = true;
  }

  if (count == -1) {
    count++;
  }

  btnDecrement.disabled = false;

  CURRENT_NUMBER.innerHTML = count;
}

btnIncrement.addEventListener('click', increment);

btnDecrement.addEventListener('click', decrement);