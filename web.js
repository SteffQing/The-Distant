
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



  // 

  
// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);



function marketplace() {
  var marketplace = document.querySelectorAll(".marketplace");

  for (var i = 0; i < marketplace.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = marketplace[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      marketplace[i].classList.add("active");
    } else {
      marketplace[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", marketplace);

function lending() {
  var lending = document.querySelectorAll(".lending");

  for (var i = 0; i < lending.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = lending[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      lending[i].classList.add("active");
    } else {
      lending[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", lending);

function game() {
  var game = document.querySelectorAll(".game-guild");

  for (var i = 0; i < game.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = game[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      game[i].classList.add("active");
    } else {
      game[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", game);

function bridge() {
  var bridge = document.querySelectorAll(".bridge");

  for (var i = 0; i < bridge.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = bridge[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      bridge[i].classList.add("active");
    } else {
      bridge[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", bridge);

function launchpad() {
  var launchpad = document.querySelectorAll(".launchpad");

  for (var i = 0; i < launchpad.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = launchpad[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      launchpad[i].classList.add("active");
    } else {
      launchpad[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", launchpad);

window.onscroll = function() {scrollFunction()};
 function scrollFunction() { 
   if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) { 
     document.getElementById("up").style.backgroundImage = "url('../assets/svg/uparrow.svg')";
   } else { 
     document.getElementById("up").style.backgroundImage = "url('../assets/svg/uparroerw.svg')"; 
   } 
 }
