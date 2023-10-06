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