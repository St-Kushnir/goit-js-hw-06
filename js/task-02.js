const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemListEl = document.querySelector('#ingredients')

const itemsEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = [ingredient]
  itemEl.classList.add('item');
  return itemEl;
});

itemListEl.append(...itemsEl);

