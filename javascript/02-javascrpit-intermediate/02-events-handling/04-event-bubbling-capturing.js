// Event Bubbling and Capturing


// Event Bubbling
// Event starts from the target element and moves up to parent elements

const nav = document.querySelector('#nav');

nav.addEventListener('click', function () {
    console.log('nav clicked');
});

// If you click a button inside #nav, this will still run
// because event bubbles from child to parent


// Example: Toggle strike-through using bubbling
const list = document.querySelector('ul');

list.addEventListener('click', function (event) {
    event.target.classList.toggle('lt');
});


// Event Capturing
// Event flows from parent to child (top to target)

const parentA = document.querySelector('.a');
const parentB = document.querySelector('.b');
const parentC = document.querySelector('.c');
const button = document.querySelector('button');

button.addEventListener('click', function () {
    console.log('button clicked');
});

parentC.addEventListener('click', function () {
    console.log('c clicked');
});

parentB.addEventListener('click', function () {
    console.log('b clicked');
});

// Capture phase enabled
parentA.addEventListener('click', function () {
    console.log('a clicked (capture)');
}, true);


// Event Delegation

const ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('lt');
    }
});