// Our main logic goes here

const generateButton = document.querySelector('#generate-btn');
let ingredientsToGenerate = [];
const maxPizzaIngredients = 3;
// Ingredients Checks

const salt = document.querySelector('#salt-check');
const sweet = document.querySelector('#sweet-check');
const weirds = document.querySelector('#weird-check');

generateButton.addEventListener(
  'click',
  () => {
    ingredientsToGenerate = [];
    if (salt.checked) ingredientsToGenerate.push(...ingredients.salt);
    if (sweet.checked) ingredientsToGenerate.push(...ingredients.sweet);
    if (weirds.checked) ingredientsToGenerate.push(...ingredients.weirds);

    const generatedPizza = generator(
      ingredientsToGenerate.length,
      maxPizzaIngredients
    );

    // renderPizza(generatedPizza);
    renderPizzaIngredientList(generatedPizza);
  },
  false
);
