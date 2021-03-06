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

    if (ingredientsToGenerate.length === 0) {
      salt.checked = true;
      ingredientsToGenerate.push(...ingredients.salt);
    }
    // console.log(ingredientsToGenerate);
    const generatedPizza = generator(
      ingredientsToGenerate.length,
      maxPizzaIngredients
    );
    console.log(generatedPizza);
    renderPizza(generatedPizza);
    renderPizzaIngredientList(generatedPizza);
  },
  false
);
