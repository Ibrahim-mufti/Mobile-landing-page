// // Navbar Script

window.addEventListener('scroll', function(){

    let Navbar = document.getElementById('navbar')

    // checking if the value of scroll is greater than 0 or the scroll move vertically
    if (this.window.scrollY > 0){
        Navbar.classList.add('scrolled')
    }

    // checking if the value of scroll is greater than 0 or the scroll move horizontally
    else if (this.window.scrollX < 0 ){
        Navbar.classList.add('scrolled')
    }

    // removing when the scroll reaches value of zero
    else {
        Navbar.classList.remove('scrolled')
    }

})

let sections = document.querySelectorAll('section[id]')
let navlinks = document.querySelectorAll('.nav-link')

window.onscroll = () => {

    // checking for the element with section that have ID
    sections.forEach(section => {

        // current scroll position
        let top = window.scrollY

        // setting offset checks when the particular section is being displayed
        let offset = section.offsetTop - 50

        // checking height of the current section
        let height = section.offsetHeight

        // getting ID of the current section 
        let id = section.getAttribute('id')

        if (top >= offset && top < offset + height){

            // looping throught links 
            navlinks.forEach(links => {

                //removing from current class
                links.classList.remove('active')

                //checking which section is active moving active class to that particular section
                document.querySelector('.links a[href *= '+ id +']').classList.add('active')
            })
        }
    })
}


const nav_btn = document.querySelector('.nav-btn')

nav_btn.addEventListener('click',function(){


    let nav_links = document.getElementById('nav-links-list');
    let nav = document.getElementById('navbar')

    // checking if the element contains specific class then remove respected classes to collapse the menu
    if (nav_links.classList.contains("list-flex-active")) {
        nav.classList.remove('menu-open')
        nav_links.classList.remove("list-flex-active")
        nav_btn.classList.remove('btn-active')
    } 
    
    // if it does not container specific class then add respected classes to expand the menu 
    else {
        nav_links.classList.add("list-flex-active")
        nav.classList.add('menu-open')
        nav_btn.classList.add('btn-active')
    }
    
    let specificLink = document.querySelectorAll('.nav-link')
    specificLink.forEach(links => {

        // closing menu when link is clicked
        links.addEventListener('click', function(){
            nav.classList.remove('menu-open')
            nav_links.classList.remove("list-flex-active")
            nav_btn.classList.remove('btn-active')
        })
    })

})



// Section 3 [tab content] Script

function Tabs(event){
    // hidding the current the active tab
    let activeTab = document.getElementsByClassName('S3-active')[0]
    activeTab.classList.remove("S3-active")  
    
    
    let activeContentId = activeTab.textContent.trim().toLocaleLowerCase().replace(" ", '-');
    let activeContent = document.getElementById(activeContentId);
    activeContent.classList.remove('tab-active');
    // activeContent.classList.remove('show');

    // displaying the pressed tab and content
    event.target.classList.add('S3-active')
    let contentID = event.currentTarget.textContent.trim().toLocaleLowerCase().replace(" ", '-')
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

        //cehcking if there is no content on the right slide 
        btn1.style.cursor = "not-allowed"
        return; 
    }

    let current = document.querySelector('.S6-active')

    current.classList.remove('S6-active', 'S6-fade-out', 'S6-fade-in')
    counter++

    // adding class to the next slide 
    slides[counter].classList.add( 'S6-active','S6-fade-in')

} 

const prev = () => {

    // changing cursor back to pointer so that it becomes active
    btn1.style.cursor = 'pointer'

    if (counter == 0) { 
        
        // check if there's no content  on the left side 
        btn2.style.cursor = "not-allowed"
        return;
    }

    let current = document.querySelector('.S6-active')
    current.classList.remove('S6-active', 'S6-fade-out', 'S6-fade-in')
    counter-- 

    // adding class to the prev slide 
    slides[counter].classList.add('S6-active', 'S6-fade-out')
}

// Slider 

function sliderDots(event){

   
    let cur_card = document.querySelectorAll(".slider-active")[0]

    // removing class from the element which have slider-active class
    cur_card.classList.remove('slider-active')

    // removing class from previous slide and next slide
    let show = document.querySelectorAll(".slider-show")
    for (var i = 0;i < 2;i++){
        show[i].classList.remove('slider-show')
    }

    let cur_dot = document.getElementsByClassName("dot-active")[0]

    // removing class from the current active slide dot
    cur_dot.classList.remove('dot-active')

    // adding to the next active slide dot that is clicked
    event.currentTarget.classList.add('dot-active')  

    // accessing cards through link by changing there values 
    let active = event.currentTarget.getAttribute("href").replace('#', '')
    let new_active = document.getElementById(active)

    // adding class to the element that has the id reffered from the dot
    new_active.classList.add("slider-active")
    
    // adding classes to the next sibling elements of the current active slide   
    let next_elem = document.getElementById(new_active.nextElementSibling.getAttribute('id'))
    next_elem.classList.add("slider-show")

    // adding classes to the previouse sibling elements of the current active slide   
    let prev_elem = document.getElementById(new_active.previousElementSibling.getAttribute('id'))
    prev_elem.classList.add("slider-show")
}

