const listContainer = document.querySelector('#ingredients-list');
const renderPizzaIngredientList = (pizza) => {
  listContainer.innerHTML = '';
  for (let i = 0; i < pizza.length; i++) {
    const newElement = document.createElement('li');
    newElement.classList = 'list-group-item';
    newElement.innerText = ingredientsToGenerate[pizza[i]];
    listContainer.appendChild(newElement);
  }
};
