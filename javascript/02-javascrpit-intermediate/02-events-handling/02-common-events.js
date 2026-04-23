// Common Events


// 1. Click
const paragraph = document.querySelector('p');

paragraph.addEventListener('click', () => {
    paragraph.style.color = 'red';
});


// 2. Input
const inputField = document.querySelector('input');

let name = "";

inputField.addEventListener('input', function (event) {
    if (event.data !== null) {
        name += event.data;
    }

    if (event.data === " ") {
        console.log(name.trim());
    }
});


// 3. Change
const select = document.querySelector('select');
const deviceText = document.querySelector('#device-select');

select.addEventListener('change', function (event) {
    deviceText.textContent = `${event.target.value} Selected`;
});


// 4. Keyboard event (keydown)
const heading = document.querySelector('h1');

window.addEventListener('keydown', function (event) {
    if (event.key === " ") {
        heading.textContent = 'Space';
    } else {
        heading.textContent = event.key;
    }
});


// 5. Custom file upload
const uploadBtn = document.querySelector('#btn');
const fileInput = document.querySelector('#fileinp');

uploadBtn.addEventListener('click', function () {
    fileInput.click();
});

fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file) {
        uploadBtn.textContent = `${file.name} Uploaded`;
    }
});


// 6. Form handling
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const main = document.querySelector('#main');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const card = document.createElement('div');
    card.classList.add('card');

    const profile = document.createElement('div');
    profile.classList.add('profile');

    const img = document.createElement('img');
    img.src = inputs[0].value;

    const h3 = document.createElement('h3');
    h3.textContent = inputs[1].value;

    const h5 = document.createElement('h5');
    h5.textContent = inputs[2].value;

    const para = document.createElement('p');
    para.textContent = inputs[3].value;

    profile.appendChild(img);

    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(para);

    main.appendChild(card);

    inputs.forEach(function (inp) {
        if (inp.type !== 'submit') {
            inp.value = "";
        }
    });
});


// 7. Mouseover and mouseout
const box = document.querySelector('#abcd');

box.addEventListener('mouseover', function () {
    box.style.backgroundColor = 'yellow';
});

box.addEventListener('mouseout', function () {
    box.style.backgroundColor = 'red';
});


// 8. Mousemove
window.addEventListener('mousemove', function (event) {
    box.style.top = event.clientY + 'px';
    box.style.left = event.clientX + 'px';
});


// 9. Keyup and keydown
window.addEventListener('keyup', function (event) {
    console.log('Key released:', event.key);
});

window.addEventListener('keydown', function (event) {
    console.log('Key pressed:', event.key);
});