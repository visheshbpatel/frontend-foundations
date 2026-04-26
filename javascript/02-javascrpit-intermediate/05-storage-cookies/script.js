const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const btn = document.querySelector('button');

function setDarkOrLight(isDark) {
    document.body.classList.remove('dark', 'light');

    if (isDark) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.add('light');
    }
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    setDarkOrLight(savedTheme === 'dark');
} else {
    setDarkOrLight(mediaQuery.matches);
}

btn.addEventListener('click', function () {
    const isDark = document.body.classList.contains('dark');
    const newTheme = !isDark;

    setDarkOrLight(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
});

mediaQuery.addEventListener('change', function (event) {
    if (!localStorage.getItem('theme')) {
        setDarkOrLight(event.matches);
    }
});