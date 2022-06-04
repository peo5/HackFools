const pizzaContainer = document.querySelector('.svg-container');

const renderPizza = (pizza) => {
  pizzaContainer.innerHTML = '';
  const pizzaSvg = makePizza(pizza);
  pizzaContainer.appendChild(pizzaSvg);
};
