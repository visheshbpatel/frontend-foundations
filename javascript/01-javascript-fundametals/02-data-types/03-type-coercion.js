/*
TYPE COERCION IN JAVASCRIPT

Type coercion means automatic conversion of one data type to another.
*/


// 1. STRING + NUMBER

let ans1 = '5' + 1;
console.log(ans1); // "51"

/*
- If one operand is string and operator is +
- JavaScript performs concatenation
- Number is converted to string
*/


// 2. STRING - NUMBER

let ans2 = '4' - 1;
console.log(ans2); // 3

/*
- For operators other than +
- JavaScript tries numeric conversion
- String is converted to number
*/


// 3. TRUTHY AND FALSY VALUES

/*
Falsy values:
- false
- 0
- null
- undefined
- NaN
- "" (empty string)

Everything else is truthy
*/


// 4. PREDICT THE RESULTS

console.log(true + false);   // 1
/*
true  -> 1
false -> 0
*/

console.log(null + 1);       // 1
/*
null -> 0
*/

console.log(5 + '5');       // "55"

console.log(!!undefined);   // false
/*
!undefined  -> true
!!undefined -> false
*/


// 5. COMMON CONFUSIONS

// (a) Why is NaN a number?

console.log(typeof NaN); // "number"

/*
NaN stands for "Not a Number"
It represents a failed numeric operation
So JavaScript still treats it as a number type
*/


// (b) undefined vs null

let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

/*
undefined:
- default value assigned by JavaScript

null:
- value intentionally set by developer
*/


// (c) '+' vs other operators

console.log('5' + 1); // "51"
console.log('5' - 1); // 4

/*
+  : prefers string concatenation
-  : forces numeric conversion
*/