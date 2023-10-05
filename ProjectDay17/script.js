const reviews = [
    {
        id:1,
        name: "Hitesh Chaudary",
        job: "Web Developer, Instructor",
        img: "images/hitesh.jpg",
        text: " Stepped into 38 countries and counting 😁 "
    },
    {
        id:1,
        name: "Urvi Goel",
        job: "SWE at Microsoft | Teaching at PW skills | Flipkart GWC 3.0 Scholar | Ex-intern at Microsoft, Apni Kaksha",
        img: "images/urvi.jpg",
        text: " I enjoy having mindful conversations with interesting people. Would love to connect with you! "
    },
    {
        id: 2,
        name: "Chirag Goel",
        job: "Engineer at Microsoft | ex-Flipkart | Teacher | Mentor | YouTuber 🚀",
        img: "images/chirag.jpg",
        text: "Profession === Engineer 💻 | Love === Teaching 😍 | Passion === Mentoring ❤️‍ I talk about Web Development"
    }
    ,
    {
        id: 4,
        name: "Anurag Tiwari ",
        job: "Program Manager | SDE - II | Mentorship | Technology Enthusiast | Public Speaker",
        img: "images/anurag.jpg",
        text: "I am a dedicated and passionate Program Manager at Physics Wallah (iNeuron) with a strong background in computer science. "
    },
    {
        id: 2,
        name: "Rohit Negi",
        job: "Learning Something New EveryDay",
        img: "images/rohit.jpg",
        text: "I love to code, design and analyze algorithms and solve problems. Currently working on Blockchain Network. Like to guide the students for Placements and GATE related stuff."
    }
];


const img = document.getElementById("person-img");
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded",function(){
    // console.log("hello");
    showPerson(currentItem);
});

function showPerson(person){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}
//show next person

nextBtn.addEventListener("click", function(){
    currentItem++;

    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem)
})