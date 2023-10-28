const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


// Get a reference to the element with the id 'date'
var dateElement = document.getElementById('date');

// Create a new Date object for the current date
var currentDate = new Date();

// Format the current date as 'MMM DD, YYYY' (e.g., 'Oct 28, 2023')
var formattedDate = currentDate.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =
      '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = ' Journey of an Enthusiastic Aspiring Developer'
    excerpt.innerHTML =
      ' Enthusiastic Aspiring Developer Ready to Dive into the World of Coding'
    profile_img.innerHTML =
      '<img src="https://media.licdn.com/dms/image/D4D03AQG249_Ug0-fyg/profile-displayphoto-shrink_400_400/0/1698085031479?e=1703721600&v=beta&t=_M5y0GJMAo0xZWcg-DsSa_XoVJeTynU7hEQtK8sv-vQ" alt="" />'
    name.innerHTML = 'Pradyumna'
    // date.innerHTML = 'Oct 08, 2020'
    dateElement.innerHTML = formattedDate;
  
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}