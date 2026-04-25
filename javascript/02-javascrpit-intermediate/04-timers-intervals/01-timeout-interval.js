// Timers and Intervals


// setTimeout
// runs once after given time
setTimeout(function () {
    console.log('hello');
}, 5000);



// setInterval
// runs repeatedly after given interval
const intervalId = setInterval(function () {
    console.log('hello');
}, 1000);



// clearTimeout
const timeoutId = setTimeout(function () {
    console.log('this will not run');
}, 3000);

clearTimeout(timeoutId);



// clearInterval
const repeatId = setInterval(function () {
    console.log('this will not repeat');
}, 3000);

clearInterval(repeatId);



// Task: Countdown using setInterval
let count = 10;

const countdown = setInterval(function () {
    if (count >= 1) {
        console.log(count);
        count--;
    } else {
        console.log('Done');
        clearInterval(countdown);
    }
}, 1000);