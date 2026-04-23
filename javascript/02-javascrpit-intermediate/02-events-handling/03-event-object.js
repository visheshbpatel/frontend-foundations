// Event Object


// target and type
const box = document.querySelector('#abcd');

box.addEventListener('click', function (event) {
    console.log(event);

    console.log(event.target); // element that triggered the event
    console.log(event.type);   // type of event (click)
});


// preventDefault
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // stops page reload
    console.log('Form submission prevented');
});

