const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.getElementById('ingredients')
console.log(ingredientsList)

function createItems (ingredients) {
  const items = ingredients.map((element) => {
  const item = document.createElement('li')
  item.textContent = element
  return item
  })

return ingredientsList.append(...items) 
}

createItems (ingredients)
