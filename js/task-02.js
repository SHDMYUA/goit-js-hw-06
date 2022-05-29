// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientElplaceRef = document.querySelector("#ingredients");
const ingredientElclass = "item";

const makeElementsIngridients = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add(ingredientElclass);
        
    return ingredientEl;
  });
};

const ingredientsELadd = makeElementsIngridients(ingredients);

ingredientElplaceRef.append(...ingredientsELadd);


