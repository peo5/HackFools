// Our main logic goes here

const generateButton = document.querySelector('#generate-btn');
let ingredientsToGenerate = [];
const maxPizzaIngredients = 3;
// Ingredients Checks

const salt = document.querySelector('#salt-check');
const sweet = document.querySelector('#sweet-check');
const weirds = document.querySelector('#weird-check');
let body = document.body;

let pizza = makePizza([0, 1]);

console.log(pizza);
body.appendChild(pizza);

console.log('potato');

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
