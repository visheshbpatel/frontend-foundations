// Event Handling

// Event = action (click, dblclick, etc.)
// Event listener = reaction to that action


const heading = document.querySelector('h1');

// Click event on h1
heading.addEventListener('click', function () {
    heading.style.color = 'red';
});


// Select paragraph
const paragraph = document.querySelector('p');

// Single click
paragraph.addEventListener('click', function () {
    paragraph.style.color = 'green';
});


// Double click function
function handleDoubleClick() {
    paragraph.style.color = 'yellow';
}

// Add double click event
paragraph.addEventListener('dblclick', handleDoubleClick);


// Removing event listener (only works if called later)
setTimeout(() => {
    paragraph.removeEventListener('dblclick', handleDoubleClick);
    console.log('Double click event removed');
}, 5000);

