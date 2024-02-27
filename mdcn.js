//Active Nav menu style
/*
const menu = document.getElementById("menu");
const list = menu.getElementsByTagName("a");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", " ");
    this.className += "active";
  });
}
*/

//slider style
const backgroundImages = [
  {
    text: "maintains  register of doctors licencsed to practice in in nigeria each year",
    image: "url('/images/practicing.jpg')",
  },
  {
    text: "makes policies on medicine, dentistry and alternative medicine practice in nigeria",
    image: "url('/images/council-members2.jpg')",
  },
  {
    text: "Determines the standard of knowledge and training of persons to practice as doctors and dentists",
    image: "url('/images/council-meeting.jpg')",
  },

  {
    text: "REGULATes THE PRACTICE OF MEDICINE DENTISTRY AND ALTERNATIVE MEDICINE IN NIGERIA",
    image: "url('/images/tribunal2.jpg')",
  },
  {
    text: "administers oath of practice on newly graduated doctors and dentists in nigeria",
    image: "url('/images/induction.jpg')",
  },

  {
    text: "Disciplines erring medical and dental practitioners",
    image: "url('/images/discipline.jpg')",
  },
  {
    text: "Medical and dental practitioners disciplinary tribunal",
    image: "url('/images/tribunal.jpg')",
  },
  {
    text: "Centralized Housemanship Placement",
    image: "url('/images/registrar3.png')",
  },
];

let img = 0;
let text = 0;

function slideImages() {
  if (img < backgroundImages.length) {
    document.getElementById("slider-img").style.backgroundImage =
      backgroundImages[img].image;
    document.getElementById("slider-text").innerHTML =
      backgroundImages[img].text;
    img++;
    if (img === backgroundImages.length) {
      img = 0;
      return;
    }
  }
}
setInterval(slideImages, 5000);
/*
//testing active class
const show = document.getElementById("menu").textContent;
console.log(show);

const edu = document.getElementById("edu");
function active() {
  edu.style.display.backgroundColor = green;
}

*/

const active = document.getElementsByClassName("active").classList.add("now");

console.log(active);

//active.classList.add(now);

/*
======================================== 
Read more style
========================================
*/
function readMoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
