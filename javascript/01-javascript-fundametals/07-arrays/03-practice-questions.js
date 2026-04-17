/*
ARRAY PRACTICE
*/


// Q1. Second fruit

let fruits = ['apple', 'guava', 'banana'];
console.log(fruits[1]); // guava



// Q2. Add elements

fruits.push('Mango');
fruits.unshift('Pineapple');

console.log(fruits);



// Q3. Replace "banana" with "Kiwi"

fruits[3] = 'Kiwi';
console.log(fruits);



// Q4. Difference: push vs unshift

/*
push:
- adds element at end

unshift:
- adds element at beginning
*/



// Q5. Remove last item

let numbers = [1, 2, 3, 4];
numbers.pop();



// Q6. Insert at index

let colors = ['Green', 'Yellow'];
colors.splice(1, 0, "Red", "Blue");



// Q7. Extract middle 3 elements

let items = [1, 2, 3, 4, 5, 6];

let newItems = items.slice(1, 4);
console.log(newItems); // [2,3,4]



/*
Better logic:
middle = [3,4,5] → slice(2,5)
*/



// Q8. Sort and reverse

let names = ["Zara", "Arjun", "Mira", "Bhavya"];

names.sort().reverse();



// Q9. Square numbers

let arr = [1, 2, 3, 4];

let sqr = arr.map(function (val) {
    return val * val;
});



// Q10. Filter > 10

let ar = [5, 12, 8, 20, 3];

let nums = ar.filter(function (val) {
    return val > 10;
});



// Q11. Sum using reduce

let arrr = [10, 20, 30];

let sum = arrr.reduce(function (acc, val) {
    return acc + val;
}, 0);



// Q12. Find first < 10

let art = [12, 15, 3, 8, 20];

let value = art.find(function (val) {
    return val < 10;
});



// Q13. Some < 35 (FIXED BUG)

let marks = [45, 33, 66, 75, 88];

let hasBelow35 = marks.some(function (val) {
    return val < 35;
});



/*
You used wrong array (arr instead of marks)
*/



// Q14. Every even

let numbs = [2, 4, 6, 8, 10];

let allEven = numbs.every(function (val) {
    return val % 2 === 0;
});



// Q15. Destructuring

let fullName = ['vishesh', 'patel'];

let [firstName, lastName] = fullName;



// Q16. Merge arrays

let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];



// Q17. Add at start using spread

let countries = ['USA', 'UK'];

countries = ['India', ...countries];



// Q18. Clone array

let arrrr = [1, 2, 3];

let copy = [...arrrr];



/*
Q19. splice vs slice

splice:
- modifies original array
- used to add/remove elements

slice:
- returns new array
- does not modify original
*/



/*
Q20. map vs forEach

map:
- returns new array
- used for transformation

forEach:
- does not return anything
- used for side effects
*/



/*
Q21. Big mistake with sort

[10, 2, 30].sort() → [10, 2, 30]

Reason:
- sort converts to string

Correct way:
*/

[10, 2, 30].sort(function (a, b) {
    return a - b;
});
