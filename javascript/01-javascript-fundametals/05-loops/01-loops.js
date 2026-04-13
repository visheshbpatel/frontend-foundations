/*
LOOPS IN JAVASCRIPT

Loops are used to repeat a block of code multiple times.

Types:
1. for loop
2. while loop
3. do-while loop
*/


// 1. FOR LOOP

/*
Best when you know:
- where to start
- where to stop
- how to update
*/

for (let i = 1; i <= 100; i++) {
    console.log(i);
}


/*
Structure:
for (initialization; condition; update)
*/


// 2. WHILE LOOP

/*
Best when:
- condition decides how long to run
- number of iterations is not fixed
*/

let j = 1;

while (j <= 32) {
    console.log(j);
    j++;
}


/*
Structure:
initialization
while (condition) {
    code
    update
}
*/


// 3. DO-WHILE LOOP

/*
Runs at least once, even if condition is false
*/

let k = 12;

do {
    console.log(k);
    k++;
} while (k < 2);


/*
Even though condition is false,
loop runs once
*/


// 4. BREAK

/*
Stops the loop completely
*/

for (let l = 1; l < 500; l++) {
    if (l === 32) {
        break;
    }
    console.log(l);
}


// 5. CONTINUE

/*
Skips current iteration and moves to next
*/

for (let l = 1; l < 50; l++) {
    if (l === 32) {
        continue;
    }
    console.log(l);
}
