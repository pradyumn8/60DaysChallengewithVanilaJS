const slides = document.querySelectorAll(".slide");
let activeSlide = 0;

function randomImg() {
    slides.forEach((slide, index) => {
    slide.style.backgroundImage = `url("https://source.unsplash.com/random/?city,fire,night,water&sig=${index}")`;
    });
    setActiveSlide();
}
randomImg();

const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

rightButton.addEventListener("click", () => {
    activeSlide++;
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setActiveSlide();
});

leftButton.addEventListener("click", () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setActiveSlide();
});

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[activeSlide].classList.add("active");
    document.body.style.backgroundImage =
    slides[activeSlide].style.backgroundImage;
}