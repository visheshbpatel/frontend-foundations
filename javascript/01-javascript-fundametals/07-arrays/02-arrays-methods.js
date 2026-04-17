/*
ARRAY METHODS IN JAVASCRIPT
*/


// 1. PUSH

let arr = [1, 2, 3, 4, 5];

arr.push(9);   // adds at end
// arr -> [1,2,3,4,5,9]



// 2. POP

arr.pop();     // removes last element



// 3. SHIFT

arr.shift();   // removes first element



// 4. UNSHIFT

arr.unshift(0); // adds at beginning



// 5. SPLICE

/*
splice(startIndex, deleteCount, ...items)
- modifies original array
*/

arr.splice(3, 2);  // remove 2 elements from index 3



// 6. SLICE

let arr2 = [1, 2, 3, 4, 5];

let newArr = arr2.slice(0, 4);

/*
- returns new array
- does NOT modify original
*/



// 7. REVERSE

arr2.reverse();

/*
- reverses array
- modifies original array
*/



// 8. SORT

let arr3 = [33, 2, 9, 44, 5, 0];

// ascending
arr3.sort(function (a, b) {
    return a - b;
});

// descending
arr3.sort(function (a, b) {
    return b - a;   // fixed (you had wrong logic)
});

/*
- modifies original array
*/



// 9. FOREACH

let arr4 = [33, 2, 5, 6, 8, 33];

arr4.forEach(function (val) {
    console.log(val);
});

/*
- does not return new array
- used for side effects
*/



// 10. MAP

let newArr4 = arr4.map(function (val) {
    return val + 5;
});

/*
- returns new array
- return is required
*/



// 11. FILTER

let arr5 = [1, 1, 2, 3, 4, 5, 6, 7, 8];

let newArr5 = arr5.filter(function (val) {
    return val > 4;
});

/*
- returns elements that satisfy condition
*/



// 12. REDUCE

let sum = arr5.reduce(function (acc, val) {
    return acc + val;
}, 0);



/*
- reduces array to single value
*/



// 13. FIND

let found = arr5.find(function (val) {
    return val === 1;
});

/*
- returns first matching value
*/



// 14. SOME

let scores = [12, 44, 53, 88, 96];

let any = scores.some(function (val) {
    return val > 85;
});

/*
- returns true if ANY element satisfies condition
*/



// 15. EVERY

let allAbove5 = scores.every(function (val) {
    return val > 5;
});

let allAbove90 = scores.every(function (val) {
    return val > 90;
});

/*
- returns true if ALL elements satisfy condition
*/



// 16. DESTRUCTURING

let array = [1, 2, 3, 4, 5, 7, 8, 9];

let [a, b] = array;

let [c, d, , , e] = array;



// 17. SPREAD OPERATOR

let arrayCopy = [...array];

/*
- creates shallow copy
- does not affect original array
*/
