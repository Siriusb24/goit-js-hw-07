const counter = document.getElementById('counter')
const buttonDecrement = document.querySelector('button')
const buttonIncrement = counter.lastElementChild

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    const value =  document.getElementById('value')
    value.textContent = counterValue;
  };

const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

buttonDecrement.addEventListener('click', decrement)
buttonIncrement.addEventListener('click', increment)