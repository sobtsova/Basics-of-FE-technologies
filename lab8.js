const testimonials = [
    {
        img: "adam.jpg", 
        quote: "“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
        name: "Adam Anderson",
        role: "Head of business development @ Colorlib"
    },
    {
        img: "skala.jpg", 
        quote: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”",
        name: "Nick Jonas",
        role: "Software Engineer @ Google"
    },
    {
        img: "margo.jpg", 
        quote: "“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.”",
        name: "Sarah Jenkins",
        role: "Product Manager @ Apple"
    }
];

let currentIndex = 0;

const imgEl = document.getElementById('slider-img');
const quoteEl = document.getElementById('slider-quote');
const nameEl = document.getElementById('slider-name');
const roleEl = document.getElementById('slider-role');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
    
const sliderContainer = document.querySelector('.testimonial-container');

function updateSlider() {
    const item = testimonials[currentIndex];
        
    imgEl.style.opacity = 0;
    quoteEl.style.opacity = 0;
    nameEl.style.opacity = 0;
    roleEl.style.opacity = 0;
        
    setTimeout(() => {
        imgEl.src = item.img;
        quoteEl.innerText = item.quote;
        nameEl.innerText = item.name;
        roleEl.innerText = item.role;
        
        imgEl.style.opacity = 1;
        quoteEl.style.opacity = 1;
        nameEl.style.opacity = 1;
        roleEl.style.opacity = 1;
    }, 300);

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function showPrev() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = testimonials.length - 1;
    updateSlider();
}

function showNext() {
    currentIndex++;
    if (currentIndex > testimonials.length - 1) currentIndex = 0;
    updateSlider();
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

function setSlide(index) {
    currentIndex = index;
    updateSlider();
}

    // ЛОГІКА ДЛЯ СВАЙПІВ (ТЕЛЕФОН)
let touchStartX = 0;
let touchEndX = 0;

sliderContainer.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

sliderContainer.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        showNext();
    }
    if (touchEndX > touchStartX + 50) {
        showPrev();
    }
}

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});