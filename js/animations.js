const scrollOffsetPercentage = 0.15;
const animatedHomepage = document.querySelector(".js-animation-homepage");
const animatedElements1 = Array.from(document.getElementsByClassName("js-animation-1"));
const animatedElements2 = Array.from(document.getElementsByClassName("js-animation-2"));
const animatedContact = document.querySelector(".js-animation-contact");

function elementInViewport(el) {
  const height = el.getBoundingClientRect().top;
  return (window.innerHeight - height) / window.innerHeight  > scrollOffsetPercentage;
}

function displayHomepage() {
    setTimeout( () => animatedHomepage.children[0].children[0].classList.add('js-visible'), 0);
    setTimeout( () => animatedHomepage.children[0].children[1].classList.add('js-visible'), 200);
    setTimeout( () => animatedHomepage.children[1].classList.add('js-visible'), 400);
}

function displayElement1(el) {
    setTimeout( () => el.children[0].classList.add('js-visible'), 0);
    setTimeout( () => el.children[1].classList.add('js-visible'), 200);
}

function displayElement2(el) {
    setTimeout( () => el.children[0].classList.add('js-visible'), 0);
    setTimeout( () => el.children[1].classList.add('js-visible'), 200);
    setTimeout( () => el.children[2].classList.add('js-visible'), 400);
}

function displayContact() {
    setTimeout( () => animatedContact.children[0].children[0].classList.add('js-visible'), 0);
    setTimeout( () => animatedContact.children[0].children[1].classList.add('js-visible'), 100);
    setTimeout( () => animatedContact.children[1].classList.add('js-visible'), 400);
    setTimeout( () => animatedContact.children[2].classList.add('js-visible'), 500);
    setTimeout( () => animatedContact.children[3].classList.add('js-visible'), 600);
}

function HandleAnimate(){

    animatedElements1.forEach(el => {
        if (elementInViewport(el)) {
            displayElement1(el);
        }
    });

    animatedElements2.forEach(el => {
        if (elementInViewport(el)) {
            displayElement2(el);
        }
    });

    if (elementInViewport(animatedContact)) {
        displayContact();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    displayHomepage();
});

window.addEventListener('scroll', () => {
    HandleAnimate();
});