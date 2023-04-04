/*===========Sections Active Link===========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    });
}

/*===========Swiper.js Slider===========*/
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});

/*===========Typed.js Automated Text===========*/
const typed = new Typed('.automated-text', {
    //strings: ['COE Student @ TMU', 'Software Engineer', 'Full-Stack Web Developer', 'Tech-Enthusiast', 'UI/UX Designer'],
    strings: ['ideas into reality.'],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 500,
    loop: true
});