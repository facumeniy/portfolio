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

const about = document.getElementById('about-nav');
const aboutDiv = document.getElementById('about');

const tools = document.getElementById('tools-nav');
const toolsDiv = document.getElementById('tools');

const work = document.getElementById('work-nav');
const workDiv = document.getElementById('work');

const contact = document.getElementById('contact-nav');
const contactDiv = document.getElementById('contact');

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