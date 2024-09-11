let menuIcon=document.querySelector('#menu-icon')
let navbar=document.querySelector('.navbar')

menuIcon.onclick= () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=() => {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']' ).classList.add('active');
            });
        };
    });

    /*=====================sticky navbar=====================*/

    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=====================remove toggle icon and  navbar=====================*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

    /*=====================scroll reveal=====================*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    /*=====================scroll reveal=====================*/

const typed=new Typed('.multiple-text', {
    strings: ['Backend Developer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


// const scriptURL = 'https://script.google.com/macros/s/AKfycbxEegWY65vMRYVhQOuuodUlFWVjIdb_yMhBeVLVTwNkNX0hKXyQuZ2GCNbVTnzW_St94w/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })

