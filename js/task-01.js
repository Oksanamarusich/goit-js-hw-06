
const items = document.querySelectorAll('.item');
const categories = document.querySelector("#categories");
const categoriesLength = categories.children.length;
console.log(`Number of categories: ${categoriesLength}`);

items.forEach((element) => {

   let title = element.firstElementChild.textContent;
   
   let titleLength = element.lastElementChild.children.length;
   
     console.log(`Category: ${title}`);
     console.log(`Elements: ${titleLength}`);

 });




