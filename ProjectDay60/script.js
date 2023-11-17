const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');
const playAgainBtn = document.getElementById('play-again-btn');

let seconds = 0;
let score = 0;
let selected_insect = {};
let timer = null; // Initialize timer as null

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up');
    startGame();
});

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_insect = { src, alt };
        screens[1].classList.add('up');
        setTimeout(() => {
            createInsect();
            startGame(); // Start game immediately after creating insect
        }, 1000);
    });
});

function startGame() {
    if (timer) clearInterval(timer); // Clear any existing interval
    timer = setInterval(increaseTime, 1000); // Start new interval
}

function increaseTime() {
    seconds++;
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML = `Time: ${m}:${s}`;
}

function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)"/>`;
    insect.addEventListener('click', catchInsect);
    game_container.appendChild(insect);
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
}

function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);
    addInsects();
}

function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseScore() {
    score++;
    if (score > 40) {
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `Score: ${score}`;
}

playAgainBtn.addEventListener('click', () => {
    seconds = 0;
    score = 0;
    timeEl.innerHTML = `Time: 00:00`;
    scoreEl.innerHTML = `Score: 0`;
    message.classList.remove('visible');
    game_container.innerHTML = '';
    screens[2].classList.remove('up');
    screens[1].classList.remove('up');
    screens[0].classList.add('up');
    clearInterval(timer); // Clear interval before restarting
    timer = null; // Reset the timer variable
});
