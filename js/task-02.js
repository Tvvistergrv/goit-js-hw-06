const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredientsRefs = document.querySelector("#ingredients");
const ingredientsMarkup = [];

function createIngredientsList(ingredients = []) {
  ingredients.map((elem) => {
    const item = document.createElement("li");
    item.textContent = elem;
    item.classList.add("item");
    ingredientsMarkup.push(item);
  });
  ingredientsRefs.append(...ingredientsMarkup);
}

createIngredientsList(ingredients);
