function calculateAge() {
    const today = new Date();
    const birthdateInput = document.getElementById('birthdate').value;
    const birthdateParts = birthdateInput.split("-");
    const birthDay = birthdateParts[0];
    const birthMonth = birthdateParts[1] - 1;
    const birthYear = birthdateParts[2];

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    const isValidDate = (date) => {
        return (
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    };

    if (!isValidDate(birthDate)) {
        alert("Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format.");
        return;
    } else if (birthDate > today) {
        alert("Please enter a birthdate that is not in the future.");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInWeeks = ageInDays / 7;
    const ageInMonths = ageInDays / 30.436875;
    const ageInYears = ageInDays / 365.25;

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
    <div class="result-item">
        <h3>Age:</h3>
        <p>${Math.floor(ageInYears)} Years ${Math.floor(ageInMonths % 12)} Months ${Math.floor(ageInDays % 30)} Days</p>
    </div>
    <div class="result-item">
        <h3>Months Passed:</h3>
        <p>${Math.floor(ageInMonths)}</p>
    </div>
    <div class="result-item">
        <h3>Weeks Passed:</h3>
        <p>${Math.floor(ageInWeeks)}</p>
    </div>
    <div class="result-item">
        <h3>Hours Passed:</h3>
        <p>${Math.floor(ageInHours)}</p>
    </div>
    <div class="result-item">
        <h3>Seconds Passed:</h3>
        <p>${Math.floor(ageInSeconds)}</p>
    </div>
    `;
    resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
});
