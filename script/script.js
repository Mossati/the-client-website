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
  const navs = document.querySelectorAll('.nav-items')
  
  navs.forEach(nav => nav.classList.toggle('nav-toggle-show'));

  x.classList.toggle("change");
}

document.querySelector('.nav-toggle')
  .addEventListener('click', classToggle);


function readArticle1() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("section-more1");
  var btnText = document.getElementById("btn-read");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lees verder";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lees minder";
    moreText.style.display = "inline";
  }
}

function readArticle2() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("section-more2");
  var btnText = document.getElementById("btn-read");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lees verder";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lees minder";
    moreText.style.display = "inline";
  }
}

function readArticle3() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("section-more3");
  var btnText = document.getElementById("btn-read");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lees verder";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lees minder";
    moreText.style.display = "inline";
  }
}

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)