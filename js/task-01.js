

const items = document.querySelectorAll('.item');
const itemsLength = items.length;

console.log(`Number of categories: ${itemsLength}`);


 items.forEach((element) => {

     let title = element.querySelector('h2').textContent;
     
     let titleElements = element.querySelectorAll('li');
     
     let titleElementsLength = titleElements.length;
     

 	console.log(`Category: ${title}`);
   console.log(`Elements: ${titleElementsLength}`);

 });




