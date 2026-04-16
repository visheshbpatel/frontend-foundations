/*
FUNCTIONS PRACTICE
*/


// Q1. Difference between declaration and expression (hoisting)

/*
Function Declaration:
- Fully hoisted
- Can be called before definition

Function Expression:
- Not fully hoisted
- Variable is hoisted, but value is undefined
*/

function abcd() {
    console.log('This works');
}

// let point = function () {
//     console.log('This will not work if called before definition');
// };



// Q2. What will it log

greet();

function greet() {
    console.log('Hello!');
}

// Output: Hello (function declaration is hoisted)



// Q3. Arrow function

let multiply = (a, b) => a * b;



// Q4. Parameters vs Arguments

function welcome(name) {
    console.log(name);
}

welcome("Harsh");

// parameter: name
// argument: "Harsh"



// Q5. Parameters vs arguments count

function demo(a, b, c) {}

demo(1, 2);

// parameters: 3
// arguments: 2
// c = undefined



// Q6. Default parameter

function sayHi(name = 'Guest') {
    console.log('Hi', name);
}

sayHi();

// Output: Hi Guest



// Q7. Rest operator

function abcd(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}

abcd(1, 2, 3, 4, 5);

/*
...args collects remaining arguments into an array
*/



// Q8. Sum using rest

function getScores(...scores) {
    let total = 0;

    scores.forEach(function (val) {
        total += val;
    });

    return total;
}

let result = getScores(10, 20, 50, 30, 25);
console.log(result);



// Q9. Early return

function checkAge(age) {
    if (age < 18) return 'too young';
    return 'Allowed';
}



// Q10. Return value

function f() {
    return;
}

// Output: undefined



// Q11. First-class functions

/*
Functions can be:
- stored in variables
- passed as arguments
- returned from other functions
*/



// Q12. Assign function to variable

let hii = function () {
    console.log('Hello');
};

hii();



// Q13. Passing function into another function

function nice() {
    console.log('nice');
}

function abcd(fn) {
    fn();
}

abcd(nice);   // correct

/*
abcd(nice()) is wrong because:
- nice() runs immediately
- its return value (undefined) is passed
*/



// Q14. Higher-order function

/*
A function that:
- takes another function as argument
- or returns a function
*/



// Q15. Identify HOF

[1, 2, 3].map(function (x) {
    return x * 2;
});

// map is a higher-order function



// Q16. Impure function

let total = 0;

function addToTotal(num) {
    total += num;
}



/*
Modifies external state → impure
*/



// Q17. Pure function (correct version)

function addToTotalPure(total, num) {
    return total + num;
}



/*
Does not modify external variables
*/



// Q18. Closure

function ddc() {
    let x = 0;

    return function () {
        console.log(x);
    };
}



// Q19. Predict output

function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter(); // 1
counter(); // 2

/*
Why:
Inner function remembers count (closure)
*/



// Q20. IIFE

(function init() {
    console.log('Initialized');
})();



// Q21. Use case of IIFE

/*
- Avoid polluting global scope
- Create private variables
*/



// Q22. Output and why

greet();

var greet = function () {
    console.log("hiii!");
};

// Error

/*
Reason:
- var greet is hoisted as undefined
- calling greet() before assignment causes error
*/



// Q23. Output and why

greet();

function greet() {
    console.log("hiii!");
}

// Output: hiii!

/*
Function declaration is fully hoisted
*/