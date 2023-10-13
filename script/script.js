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
document.getElementById("slider-img").src = "./assets/slider-img" +  val + ".svg";

function showVal(newVal){
  document.getElementById("slider-img").src = "./assets/slider-img" + newVal+ ".svg";
}