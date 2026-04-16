/*
FUNCTIONS PRACTICE (REAL USE CASES)
*/


// 1. BMI Calculator

function bmi(weight, height) {
    return weight / (height * height);
}

let bmiResult = bmi(65, 1.83).toFixed(2);
console.log(bmiResult); // 19.41


/*
Optional improvement: return category as well
*/

function bmiCategory(weight, height) {
    let value = weight / (height * height);

    if (value < 18.5) return 'Underweight';
    if (value < 25) return 'Healthy';
    if (value < 30) return 'Overweight';
    return 'Obese';
}

console.log(bmiCategory(65, 1.83));



// 2. Reusable Discount Calculator (Closure)

function createDiscount(discount) {
    return function (price) {
        return price - (price * discount / 100);
    };
}

let discount10 = createDiscount(10);
console.log(discount10(500)); // 450

let discount50 = createDiscount(50);
console.log(discount50(200)); // 100


/*
Closure:
Inner function remembers discount value
*/



// 3. Counter using Closure

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

let c = createCounter();

console.log(c()); // 1
console.log(c()); // 2

let d = createCounter();

console.log(d()); // 1
console.log(d()); // separate state



// 4. Pure Function

function double(val) {
    return val * 2;
}

let result = double(5);
console.log(result);


/*
Pure function:
- same input --> same output
- no side effects
*/



// 5. IIFE (Isolation)

(function () {
    const password = 'Secret Password';
    console.log(password);
})();

// console.log(password); // error


/*
Used to avoid global scope pollution
*/



// 6. Arrow vs Regular Functions

function normal() {
    return this;
}

let arrow = () => this;

/*
Difference:
- arrow functions do not have their own this
- they inherit this from surrounding scope
*/



// 7. Hoisting and TDZ

// console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError
let b = 20;


/*
var:
- hoisted and initialized as undefined

let:
- hoisted but not initialized (TDZ)
*/