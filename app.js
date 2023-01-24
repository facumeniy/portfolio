// FADE
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 1,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    } )
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

// NAV BAR SCROLL TO
const mainBtn = document.getElementById('main-btn');

const about = document.getElementById('about-nav');
const aboutDiv = document.getElementById('about');

const tools = document.getElementById('tools-nav');
const toolsDiv = document.getElementById('tools');

const work = document.getElementById('work-nav');
const workDiv = document.getElementById('work');

const contact = document.getElementById('contact-nav');
const contactDiv = document.getElementById('contact');

mainBtn.addEventListener('click', () => {
    workDiv.scrollIntoView({ behavior: 'smooth' });
});

about.addEventListener('click', () => {
    aboutDiv.scrollIntoView({ behavior: 'smooth' });
});

tools.addEventListener('click', () => {
    toolsDiv.scrollIntoView({ behavior: 'smooth' });
});

work.addEventListener('click', () => {
    workDiv.scrollIntoView({ behavior: 'smooth' });
});

contact.addEventListener('click', () => {
    contactDiv.scrollIntoView({ behavior: 'smooth' });
});

// HEADER HIDING
const header = document.querySelector('.header');
var lastScrollTop = 0;
var timeout;

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            header.classList.remove('nav-unscrolled');
            header.classList.add('nav-scrolled');
        }, 300);
    } else {
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            header.classList.remove('nav-scrolled');
            header.classList.add('nav-unscrolled');
        }, 300);
    }
    lastScrollTop = scrollTop;
 }, false);




