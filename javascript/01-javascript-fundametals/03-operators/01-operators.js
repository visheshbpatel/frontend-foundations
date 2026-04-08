/*
OPERATORS IN JAVASCRIPT

Types:
1. Arithmetic
2. Comparison
3. Assignment
4. Logical
5. Unary
6. Ternary
*/


// 1. ARITHMETIC OPERATORS

/*
Used for mathematical operations
*/

console.log(1 + 2);        // 3
console.log('Vish' + 'esh'); // "Vishesh" (concatenation)
console.log(12 - 2);       // 10
console.log(12 / 6);       // 2
console.log(12 * 2);       // 24
console.log(12 % 5);       // 2 (remainder)
console.log(2 ** 3);       // 8 (power)


// 2. COMPARISON OPERATORS

/*
Used to compare values
*/

// Assignment
let a = 5;

// Loose equality (type coercion happens)
console.log(12 == '12');   // true

// Strict equality (no type coercion)
console.log(12 === '12');  // false

// Not equal
console.log(12 != '12');   // false

// Strict not equal
console.log(12 !== '12');  // true

// Greater / less
console.log(12 > 11);      // true
console.log(12 < 113);     // true
console.log(22 <= 22);     // true


// 3. ASSIGNMENT OPERATORS

let x = 12;

x += 3;   // 15
x -= 11;  // 4
x *= 2;   // 8
x /= 2;   // 4
x %= 3;   // 1


// 4. LOGICAL OPERATORS

// AND
console.log(true && false); // false

// OR
console.log(true || false); // true

// NOT
console.log(!true);         // false


// IMPORTANT: logical operators return values, not just true/false

console.log(0 || 'hello');   // "hello"
console.log('hi' && 10);     // 10


// 5. UNARY OPERATORS

/*
Operate on a single operand
*/

console.log(+'10');     // 10 (string to number)
console.log(-5);        // -5
console.log(!5);        // false
console.log(typeof 'vbp'); // "string"

let c = 12;

++c;   // pre-increment (first increase, then use)
c++;   // post-increment (first use, then increase)


// 6. TERNARY OPERATOR

/*
Short form of if-else
*/

12 > 13 ? console.log('true') : console.log('false');


// 7. TYPE CHECKING

console.log(typeof null); // "object" (known bug)
console.log(typeof []);   // "object"


// Better way to check array

let arr = [];
console.log(Array.isArray(arr)); // true


// instanceof (works with reference types)

console.log(arr instanceof Array); // true

let num = 12;
// console.log(num instanceof Number); // false

/*
instanceof works with objects, not primitive values
*/