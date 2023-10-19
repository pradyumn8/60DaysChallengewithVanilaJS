const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"],[name="voice"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

function populateVoices() {
    voices = speechSynthesis.getVoices();
    voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');



voicesDropdown.innerHTML += addtionalVoices
.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');

}

//call populatevoices when the page initially loads
document.addEventListener('DOMContentLoaded', populateVoices);

function setVoice() {
    const selectedVoice = voices.find(voice => voice.name === this.value);

//check if the voice's name or lang indicates it's a female voice
if (selectedVoice.name.includes('Female') || selectedVoice.lang.includes('female')) {
    msg.voice = selectedVoice;
} else {
    // If no female voice is found, select the first avaulable voice
    msg.voice = voices[0];
}
toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change',setOption));

speakButton.addEventListener('click', () => {
    msg.text = document.querySelector('[name="text"]').value;
    toggle();
});

stopButton.addEventListener('click', () => toggle(false));