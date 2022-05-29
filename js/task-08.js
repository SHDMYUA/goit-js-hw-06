// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formRef = document.querySelector(".login-form")

formRef.addEventListener("submit", getDataForm);

function getDataForm (event) {
  event.preventDefault();
  const { email, password } = event.target.elements;
  const emailValue = email.value;
  const passwordValue = password.value;

  if(emailValue && passwordValue) {
    const userData = {
      [email.name]: email.value,
      [password.name]: password.value,
      }
      console.log(userData);
      event.currentTarget.reset();
      return;
  }
  return alert("все поля должны быть заполнены!"); 
  }

