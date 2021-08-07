const getAllcategories = function (){
const allCategories = document.getElementById('categories')
const allChildren = allCategories.children
return `В списке ${allChildren.length} категории.`
}
console.log(getAllcategories())

