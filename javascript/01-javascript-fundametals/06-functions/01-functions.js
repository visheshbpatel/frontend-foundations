/*
FUNCTIONS IN JAVASCRIPT
*/


// 1. FUNCTION DECLARATION

function abcd() {
    // function statement
}


/*
2. FUNCTION EXPRESSION
*/

let func = function () {
    // function expression
};


/*
3. ARROW FUNCTION
*/

let fnc = () => {
    // arrow function
};



// 4. PARAMETERS AND ARGUMENTS

function color(name) {
    console.log(`color is ${name}`);
}

color('red');
color('green');
color('blue');


// parameters: name
// arguments: 'red', 'green', etc.



// 5. BASIC FUNCTION

function add(v1, v2) {
    console.log(v1 + v2);
}

add(5, 5);
add(10, 12);
add(1, -4);



// 6. MISSING ARGUMENTS

function add2(v1, v2) {
    console.log(v1 + v2);
}

add2();   // NaN (undefined + undefined)



// 7. DEFAULT PARAMETERS

function add3(v1 = 4, v2 = 6) {
    console.log(v1 + v2);
}

add3();        // 10
add3(1, 4);    // 5
add3(1);       // 7



// 8. REST PARAMETERS

function collect(...values) {
    console.log(values);
}

collect(1, 2, 3, 4, 5);


/*
If used in parameters --> rest operator
*/


function example(a, b, c, ...rest) {
    console.log(a);     // 1
    console.log(b);     // 2
    console.log(c);     // 3
    console.log(rest);  // [4, 5, 6...]
}

example(1, 2, 3, 4, 5, 6);



// 9. RETURN

function ok() {
    return 12;
}

let result = ok();
console.log(result);


/*
return sends value back to where function was called
*/


// 10. FIRST-CLASS FUNCTIONS

/*
Functions can be:
- stored in variables
- passed as arguments
- returned from other functions
*/


// 11. HIGHER-ORDER FUNCTIONS (HOF)

/*
Function that:
- takes another function as argument
- or returns a function
*/


// 12. PURE vs IMPURE FUNCTIONS

let a = 12;

function pureExample() {
    console.log('does not modify external state');
}

function impureExample() {
    a++;
    console.log('modifies external variable');
}



// 13. CLOSURE

function outer() {
    let x = 12;

    return function () {
        console.log(x);
    };
}

let inner = outer();
inner();   // 12


/*
Inner function remembers variables of outer function
*/


// 14. LEXICAL SCOPING

function parent() {
    let a = 10;

    function child() {
        console.log(a);
    }

    child();
}


/*
Inner functions access variables based on where they are written,
not where they are called
*/


// 15. IIFE

(function () {
    console.log('immediately invoked');
})();



// 16. HOISTING DIFFERENCE

hoistTest();  // works

function hoistTest() {
    console.log('function declaration');
}


// function expression is not hoisted

// expr();  // error

let expr = function () {
    console.log('function expression');
};