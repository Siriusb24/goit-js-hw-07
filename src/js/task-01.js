const allCategories = document.getElementById('categories')
const allChildren = allCategories.children

const getAllcategories = function (){
return `В списке ${allChildren.length} категории.`
}
console.log(getAllcategories())

const list = Array.from(allCategories.children);
console.log(list)
for (let elem of list) {
    const category = elem.firstElementChild.textContent;   
    const quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
};
