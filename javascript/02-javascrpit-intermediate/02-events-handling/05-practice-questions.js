// Word Counter

const inputField = document.querySelector('input');
const counter = document.querySelector('span');

const maxLength = 20;

inputField.addEventListener('input', function () {
    const remaining = maxLength - inputField.value.length;

    counter.textContent = remaining;

    if (remaining < 0) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'white';
    }
});


// Q events vs listeners
// Event = an action like click, input, keydown
// Event listener = function that runs when the event happens


// Q capturing vs bubbling
// Capturing = event flows from document to target element
// Bubbling = event flows from target element to parent elements
// By default, events follow bubbling

