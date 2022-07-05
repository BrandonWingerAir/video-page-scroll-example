const headerFull = document.querySelector('#header-full');
const video = headerFull.querySelector('video');
const text = headerFull.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

// Scroll Magic
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 650,
    triggerElement: headerFull,
    triggerHook: 0
})
    // .addIndicators()
    .setPin(headerFull)
    .addTo(controller);

// Text Animation
const textAnimated = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 600,
    triggerElement: headerFull,
    triggerHook: 0
})
    .setTween(textAnimated)
    .addTo(controller);

// Video Animation
let accelAmount = 0.1;
let scrollPosition = 0;
let delay = 0;

scene.on('update', e => {
    scrollPosition = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPosition - delay) * accelAmount;
    // video.currentTime = scrollPosition;
    video.currentTime = delay;
}, 33.3);