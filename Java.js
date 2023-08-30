// Navbar Script

window.addEventListener('scroll', function(){
    let Navbar = document.getElementById('navbar')
    if (this.window.scrollY > 0){
        Navbar.classList.add('scrolled')
    }
    else if (this.window.scrollX < 0 ){
        Navbar.classList.add('scrolled')
    }
    else {
        Navbar.classList.remove('scrolled')
    }

})

let sections = document.querySelectorAll('section[id]')
let navlinks = document.querySelectorAll('.nav-link')

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY
        let offset = section.offsetTop - 50
        let height = section.offsetHeight
        let id = section.getAttribute('id')
        if (top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.nav a[href *= '+ id +']').classList.add('active')

            })
        }
    })
}


// Section 3 [tab content] Script

function Tabs(event){
    // hidding the current the active tab
    let activeTab = document.getElementsByClassName('S3-active')[0]
    activeTab.classList.remove("S3-active")  
    let activeContentId = activeTab.text.trim().toLocaleLowerCase().replace(" ", '-');
    let activeContent = document.getElementById(activeContentId);
    activeContent.classList.remove('tab-active');
    // activeContent.classList.remove('show');

    // displaying the pressed tab and content
    event.target.classList.add('S3-active')
    let contentID = event.currentTarget.text.trim().toLocaleLowerCase().replace(" ", '-')
    let tabContent = document.getElementById(contentID)
    tabContent.classList.add('tab-active')
    // tabContent.classList.add('show')
}

// Section 6 [slide] Script

let slides = document.querySelectorAll('.section6-content')
let counter = 0
let btn1 = document.getElementById('Forw')
let btn2 = document.getElementById('Back')


const next = () => {
    btn2.style.cursor = 'pointer'
    if (counter == slides.length - 1) { 
        btn1.style.cursor = "not-allowed"
        return; 
    }

    let current = document.querySelector('.S6-active')

    current.classList.remove('S6-active', 'S6-fade-out', 'S6-fade-in')
    counter++
    slides[counter].classList.add( 'S6-active','S6-fade-in')

} 

const prev = () => {
    btn1.style.cursor = 'pointer'
    if (counter == 0) { 
        btn2.style.cursor = "not-allowed"
        return;
    }
    let current = document.querySelector('.S6-active')
    current.classList.remove('S6-active', 'S6-fade-out', 'S6-fade-in')
    counter-- 
    slides[counter].classList.add('S6-active', 'S6-fade-out')
}

// Slider 

function sliderDots(event){
    // removing classes
    let cur_card = document.querySelectorAll(".slider-active")[0]
    cur_card.classList.remove('slider-active')
    let show = document.querySelectorAll(".slider-show")
    for (var i = 0;i < 2;i++){
        show[i].classList.remove('slider-show')
    }

    let cur_dot = document.getElementsByClassName("dot-active")[0]
    cur_dot.classList.remove('dot-active')
    event.currentTarget.classList.add('dot-active')  

    // accessing cards
    let active = event.currentTarget.getAttribute("href").replace('#', '')
    let new_active = document.getElementById(active)
    new_active.classList.add("slider-active")
    // sibling elements
    
    let next_elem = document.getElementById(new_active.nextElementSibling.getAttribute('id'))
    next_elem.classList.add("slider-show")
    
    let prev_elem = document.getElementById(new_active.previousElementSibling.getAttribute('id'))
    prev_elem.classList.add("slider-show")
}

