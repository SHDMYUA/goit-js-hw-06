// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const decrementButtom = document.querySelector('button[data-action="decrement"]');
const incrementButtom = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');

let counterValue = 0;

function decrement () {
  counterValue-=1;
  updateCounterValue();
}

function increment () {
  counterValue+=1;
  updateCounterValue();
}

function updateCounterValue() {
  span.textContent = counterValue;
}

decrementButtom.addEventListener("click", decrement);
incrementButtom.addEventListener("click", increment);