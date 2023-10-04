function checkVowels() {
    var text = document.getElementById("inputText").value.trim(); // Trim whitespace
    var vowelCount = 0;

    // Check if the input is empty
    if (text === "") {
        alert("Please enter some text.");
        return; // Exit the function
    }

    // Convert it into lowercase
    text = text.toLowerCase();

    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if (isVowel(char)) {
            vowelCount++;
        }
    }

    var result = document.getElementById("result");
    result.textContent = "Total Vowels: " + vowelCount;
}

function isVowel(char) {
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}
