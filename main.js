const headerFull = document.querySelector('#header-full');
const video = headerFull.querySelector('video');
const text = headerFull.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

// Scroll Magic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 650,
    triggerElement: headerFull,
    triggerHook: 0
})
    .addIndicators()
    .setPin(headerFull)
    .addTo(controller);