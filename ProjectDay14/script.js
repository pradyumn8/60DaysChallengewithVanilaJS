const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseEl = document.getElementById("lowercase");
const UppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");
const copyIcon = document.getElementById("copyIcon");

const lowercaseLetters = "abcdefghijklmopqrstuvwxyz";
const UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\,./<>?";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',() => {
    sliderValue.textContent = inputSlider.value;
})

generateBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
})


function generatePassword() {
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += UppercaseEl.checked ? UppercaseLetters : "";
    characters += numberEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    if (characters === "") {
        alert("Please select at least one checkbox.");
        return ""; // Return an empty string if no checkboxes are selected.
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

copyIcon.addEventListener("click",() => {
    if(passBox.value !="" || passBox.value.length >= 10){
        navigator.clipboard.writeText(passBox.value)
        copyIcon.innerText = "check"
        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
        },3000)
    }
});