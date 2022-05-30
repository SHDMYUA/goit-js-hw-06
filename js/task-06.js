// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const validationTextRef = document.querySelector("#validation-input");

validationTextRef.addEventListener("blur", checkValidationText);

function checkValidationText (event) {
  const inputText= event.target;
  const inputTextLength = Number(inputText.dataset.length);

  // Variant 1:
  if(inputTextLength === inputText.value.length){
    inputText.classList.value ="valid";
        return;
  }
  inputText.classList.value ="invalid";
  };

// Variant 2:
  // if(inputTextLength === inputText.value.length){
  //   return changeClass(inputText, "valid", "invalid");
  //   }
  //   return changeClass(inputText, "invalid", "valid");
  // };

  // function changeClass (element, add, remove){
  //   element.classList.add(add);
  //   element.classList.remove(remove);
  // };