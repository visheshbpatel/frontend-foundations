/*
SCOPE IN JAVASCRIPT

Types:
1. Global Scope
2. Function Scope
3. Block Scope
*/


// 1. GLOBAL SCOPE

var a = 12;   // global scope

/*
- Accessible anywhere in the code
- In browser, attached to window object (only for var)
*/




// 2. VAR AND BLOCK

{
    var b = 19;
}

/*
- var does NOT respect block scope
- Even though it is inside {}, it becomes accessible outside
*/

console.log(b);   // 19 (accessible)




// 3. LET AND BLOCK

{
    let c = 22;
}

/*
- let respects block scope
- Only accessible inside the block
*/

// console.log(c);   // error




// 4. FUNCTION SCOPE

function abc() {
    var x = 14;
    let y = 12;

    /*
    - Both x and y are accessible only inside this function
    */
}

// console.log(x);   // error
// console.log(y);   // error




// 5. VAR INSIDE FUNCTION WITH BLOCK

function ccb() {
    if (true) {
        var d = 2;
    }

    /*
    - var ignores block scope
    - It becomes function scoped
    */

    console.log(d);   // 2 (accessible in whole function)
}




// 6. LET INSIDE BLOCK IN FUNCTION

function bci() {
    if (true) {
        let e = 2;

        console.log(e);   // 2 (accessible here)
    }

    /*
    - let is block scoped
    - Not accessible outside the if block
    */

    // console.log(e);   // error
}




/*
SUMMARY

Global Scope:
- Variables accessible everywhere

Function Scope:
- Variables accessible only inside the function (var, let, const)

Block Scope:
- Variables accessible only inside {} (let, const)
- var does NOT follow block scope
*/