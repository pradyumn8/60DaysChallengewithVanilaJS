const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 5;

for(let i = 0; i < rows * 4; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
}
function getRandomSize() {
    return `${getRandomNo()}x${getRandomNo()}`;
}
function getRandomNo() {
    return Math.floor(Math.random() * 10) + 300;
}