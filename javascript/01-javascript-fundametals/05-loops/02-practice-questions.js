/*
LOOPS PRACTICE
*/


// Q1. Print numbers from 1 to 10 using a for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// Q2. Print numbers from 10 to 1 using a while loop

let i1 = 10;

while (i1 > 0) {
    console.log(i1);
    i1--;
}



// Q3. Print even numbers from 1 to 20 using a for loop

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/*
Better approach:
for (let i = 2; i <= 20; i += 2)
*/



// Q4. Print odd numbers from 1 to 15 using a while loop

let j = 1;

while (j <= 15) {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
}

/*
Better approach:
start from 1 and increment by 2
*/



// Q5. Print the multiplication table of 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}



// Q6. Find the sum of numbers from 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);



// Q7. Print numbers between 1 to 50 divisible by 3

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}



// Q8. Check even or odd from 1 to user input

let val = Number(prompt('Enter a number'));

for (let i = 1; i <= val; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

/*
Used Number() to ensure numeric input
*/



// Q9. Count numbers between 1 to 100 divisible by both 3 and 5

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        count++;
    }
}

console.log(count);



// Q10. Stop at first multiple of 7 (1–100)

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
        break;
    }
}



/*
Q11. Skip multiples of 3 (1–20)
*/

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}



/*
Q12. Print first 5 odd numbers (1–100)
*/

let countOdd = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        countOdd++;
    }

    if (countOdd === 5) break;
}