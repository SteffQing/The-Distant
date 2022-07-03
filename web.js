// const menu = document.querySelector('.menu')
// const navLinks = document.querySelector('.nav')
// let hamburgerOpen = false

// menu.addEventListener('click', () => {
//     if(hamburgerOpen){
//         navLinks.classList.toggle("navlink")
//         menu.classList.toggle("menuclose")
//     } else{
//         navLinks.classList.remove("show-navlinks")
//         menu.classList.remove("menuclose")
//         hamburgerOpen = false
//     }
// })


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);