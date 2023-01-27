const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const Button = document.querySelector(".btn")

Button.addEventListener("click", function(e) {
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop

    let Ripples = document.createElement("span")
    Ripples.style.left = x + "px"
    Ripples.style.top = y + "px"
    this.appendChild(Ripples)

    setTimeout(() => {
        Ripples.remove()
    }, 1000)
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.header`)
sr.reveal(`.info`, {delay: 500, origin: 'left'})
sr.reveal(`.blob`, {delay: 600, origin: 'right'})
sr.reveal(`.social__icons`, {delay: 700, origin: 'bottom'})