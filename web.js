const menu = document.querySelector('.menu')
const navLinks = document.querySelector('.nav')
let hamburgerOpen = false

menu.addEventListener('click', () => {
    if(hamburgerOpen){
        navLinks.classList.toggle("navlink")
        menu.classList.toggle("menuclose")
    } else{
        navLinks.classList.remove("show-navlinks")
        menu.classList.remove("menuclose")
        hamburgerOpen = false
    }
})
