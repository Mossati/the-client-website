function option1(){
    document.getElementById('probleem').scrollIntoView({
        behavior: 'smooth'
      });
}

function option2(){
    document.getElementById('waarombrain').scrollIntoView({
        behavior: 'smooth'
      });
}

function option3(){
    document.getElementById('ervaringen').scrollIntoView({
        behavior: 'smooth'
      });
}

function classToggle(x) {
  const navItems = x.parentElement.parentElement.querySelector('.nav-items');
  navItems.classList.toggle('nav-toggle-show');

  x.classList.toggle("change");
}

document.querySelector('.nav-toggle')
  .addEventListener('click', classToggle);


function readArticle1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("section-more1");
  var btnText = document.getElementById("btn-read1");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = '<i class="fa-brands fa-readme"></i> Lees verder';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = '<i class="fa-brands fa-readme"></i> Lees minder';
    moreText.style.display = "inline";
  }
}

function readArticle2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("section-more2");
  var btnText = document.getElementById("btn-read2");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = '<i class="fa-brands fa-readme"></i> Lees verder';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = '<i class="fa-brands fa-readme"></i> Lees minder';
    moreText.style.display = "inline";
  }
}

function readArticle3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("section-more3");
  var btnText = document.getElementById("btn-read3");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = '<i class="fa-brands fa-readme"></i> Lees verder';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = '<i class="fa-brands fa-readme"></i> Lees minder';
    moreText.style.display = "inline";
  }
}

var scrollToTopBtn = document.getElementById("scroll-top");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});


var val = document.getElementById("problem-slider").value;
document.getElementById("slider-img").src = "./assets/slider-deal.svg";

function showVal(newVal) {
  let slider = ["slider-deal.svg", "slider-weather.svg", "slider-save.png", "slider-fill.png", "slider-saveup.svg", "slider-app.svg"];
  let text = ["Installatie van de regenton", "Real-time weersvoorspellingen", "Systeem vult de regenton automatisch bij droogte", 
  "Systeem leegt de regenton automatisch bij regen", "Bespaar kosten", "Krijg inzicht op je wateropslag met de app"];

  document.getElementById("slider-img").src = "./assets/" + slider[newVal];
  document.getElementById("slider-label").innerHTML = text[newVal];
}

var sections = document.querySelectorAll(".fade-in");

sections.forEach(function(section) {
  var isVisible = false;

document.addEventListener("scroll", function() {
    var sectionOffset = section.offsetTop;
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    if (scrollPosition > sectionOffset - windowHeight / 2 && !isVisible) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
        isVisible = true;
    }

    if (scrollPosition <= sectionOffset - windowHeight / 2 && isVisible) {
        section.style.opacity = 0;
        section.style.transform = "translateY(100%)";
        isVisible = false;
    }
});
});

const imageItems = document.querySelectorAll('.image-item');
const images = document.querySelectorAll('.image-item img');

let currentIndex = 0;

function scaleImages() {
    images.forEach((image, index) => {
        const scaleFactor = (index === currentIndex) ? 1.25 : 1;
        image.style.transform = `scale(${scaleFactor})`;
        image.style.position = 'relative';
        image.style.zIndex = (index === currentIndex) ? 1 : 0;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % imageItems.length;
    scaleImages();
}

setInterval(nextSlide, 3000);


const changeColorButton = document.getElementById('change-color-button');
let rainMode = false;

changeColorButton.addEventListener('click', function () {

  if (rainMode === false){
    document.documentElement.style.setProperty('--cloud', '#5a8396');
    document.documentElement.style.setProperty('--grey', '#3b5866');

    const movingCloudElements = document.getElementsByClassName("moving-cloud");
    for (let i = 0; i < movingCloudElements.length; i++) {
      movingCloudElements[i].style.backgroundImage = 'url("../assets/cloud-dark.png")';
    }

    rainMode = true;
  }else{
    document.documentElement.style.setProperty('--cloud', '#ffffff');
    document.documentElement.style.setProperty('--grey', '#919ea1');

    const movingCloudElements = document.getElementsByClassName("moving-cloud");
    for (let i = 0; i < movingCloudElements.length; i++) {
      movingCloudElements[i].style.backgroundImage = 'url("../assets/cloud.png")';
    }

    rainMode = false;
  }
});





