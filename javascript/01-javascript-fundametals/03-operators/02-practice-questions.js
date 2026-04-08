/*
PRACTICE: LOGICAL OPERATORS, TERNARY, TRUTHY/FALSY
*/


// 1.

let x = 10;
let y = 20;

if (x > 5 && y < 25) {
    console.log("A");
} else {
    console.log("B");
}

// Output: A



// 2.

let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
    console.log('Access granted');
} else {
    console.log("Access denied");
}

// Output: Access granted



// 3.

let temp = 35;

if (!(temp < 30)) {
    console.log("Hot");
} else {
    console.log("Pleasant");
}

// Output: Hot



// 4.

let a = 0;

if (a) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Output: Falsy

/*
0 is a falsy value
*/



// 5.

let score = 78;

let grade =
    score >= 90 ? 'A' :
    score >= 75 ? 'B' :
    score >= 60 ? 'C' :
    'Fail';

console.log(grade);

// Output: B



// 6.

let points = 120;

let status =
    points > 100 ? 'Gold' :
    points > 50 ? 'Silver' :
    'Bronze';

console.log(status);

// Output: Gold



// 7.

let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? 'Allow' : 'Deny';

console.log(access);

// Output: Deny



// CONFUSION 1: !! (Boolean conversion)

/*
!! converts any value to its boolean equivalent
*/

console.log(!!"");       // false
console.log(!!"hello");  // true
console.log(!!0);        // false
console.log(!!1);        // true

/*
!  flips the value
!! converts it to true/false
*/



// CONFUSION 2: Pre vs Post Increment

let n = 5;

console.log(++n); // 6 (increment first, then use)
console.log(n++); // 6 (use first, then increment)
console.log(n);   // 7