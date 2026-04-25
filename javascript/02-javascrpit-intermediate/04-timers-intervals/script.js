// Download Progress Simulation

const progressBar = document.querySelector('#progressFill');
const progressText = document.querySelector('#progressText');
const statusText = document.querySelector('h3');
const countdownText = document.querySelector('#countdown');
const countdownWrapper = document.querySelector('h5');

let timeLeft = 5;

// Countdown
const countdownInterval = setInterval(function () {
    if (timeLeft > 0) {
        countdownText.textContent = timeLeft;
        timeLeft--;
    } else {
        clearInterval(countdownInterval);
        countdownWrapper.style.display = 'none';

        startDownload();
    }
}, 1000);


// Download simulation
function startDownload() {
    let progress = 0;

    const downloadInterval = setInterval(function () {
        if (progress < 100) {
            progress++;

            progressBar.style.width = progress + '%';
            progressText.textContent = progress + '%';
        } else {
            clearInterval(downloadInterval);
            statusText.textContent = 'Downloaded';
        }
    }, 1000);
}