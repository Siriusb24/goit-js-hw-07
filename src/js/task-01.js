const allCategories = document.getElementById('categories')
const allChildren = allCategories.children
console.log(`В списке ${allChildren.length} категории.`)
const list = Array.from(allCategories.children);
for (let elem of list) {
    const category = elem.firstElementChild.textContent;   
    const quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
};
