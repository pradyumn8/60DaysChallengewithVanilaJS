const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = "I'm a student!";
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    textEl.innerHTML = text.slice(0, idx) + '<span id="cursor">|</span>';
    idx++;

    if (idx > text.length) {
        idx = 1;
        textEl.innerHTML = "I'm a ";
        setTimeout(() => {
            textEl.innerHTML = "I'm a developer";
        }, 1000); // Change the text to "I'm a developer" in red after a pause
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});
