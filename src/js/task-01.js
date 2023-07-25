const allCategories = document.querySelectorAll('.item');
console.log('Number of caregories:', allCategories);

let numbers = [...allCategories];
console.log(numbers);
numbers.forEach(function (elem) {
    const categories = numbers.map(li.item => li.item.nextElementSibling
)
});

console.log(categories);
