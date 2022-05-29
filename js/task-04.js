// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const decrementButtomRef =
document.querySelector('button[data-action="decrement"]');

const incrementButtomRef =
document.querySelector('button[data-action="increment"]');

const spanRef = document.querySelector('#value');

decrementButtomRef.addEventListener("click", decrement);

incrementButtomRef.addEventListener("click", increment);

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
  spanRef.textContent = counterValue;
}

