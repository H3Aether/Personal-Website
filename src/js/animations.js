const scrollOffsetPercentage = 0.15;
const animatedHomepage = document.querySelector(".js-animation-homepage");
const animatedElements1 = Array.from(document.getElementsByClassName("js-animation-1"));
const animatedElements2 = Array.from(document.getElementsByClassName("js-animation-2"));
const animatedContact = document.querySelector(".js-animation-contact");
const animatedAboutMe = document.querySelector(".js-animation-aboutme");

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

function displayContact() {
    setTimeout( () => animatedContact.children[0].children[0].classList.add('js-visible'), 0);
    setTimeout( () => animatedContact.children[0].children[1].classList.add('js-visible'), 100);
    setTimeout( () => animatedContact.children[1].classList.add('js-visible'), 400);
    setTimeout( () => animatedContact.children[2].classList.add('js-visible'), 500);
    setTimeout( () => animatedContact.children[3].classList.add('js-visible'), 600);
}


function displayAboutMe(){
    setTimeout( () => animatedAboutMe.children[0].children[0].classList.add('js-visible'), 0); // About me title
    setTimeout( () => animatedAboutMe.children[1].classList.add('js-visible'), 0); // Photo
    setTimeout( () => animatedAboutMe.children[0].children[1].children[0].classList.add('js-visible'), 100); // Description
    setTimeout( () => animatedAboutMe.children[0].children[1].children[1].classList.add('js-visible'), 200); // Description
    setTimeout( () => animatedAboutMe.children[0].children[1].children[2].classList.add('js-visible'), 300); // Description
    setTimeout( () => animatedAboutMe.children[0].children[1].children[3].classList.add('js-visible'), 400); // Description
    setTimeout( () => animatedAboutMe.children[0].children[1].children[4].classList.add('js-visible'), 500); // Description
}

function HandleAnimate(){

    animatedElements1.forEach(el => {
        if (elementInViewport(el)) {
            displayElement1(el);
        }
    });
    
    var j;
    for (var i = 0; i < animatedElements2.length; i++) {
        if (window.innerWidth > 1420){
            if ((i%3 == 0) && elementInViewport(animatedElements2[i])) {
                animatedElements2[i].classList.add('js-visible');
                j = i+1;
                setTimeout( () => animatedElements2[j].classList.add('js-visible'), 200);
                setTimeout( () => animatedElements2[j+1].classList.add('js-visible'), 400);
            }
        }
        else if(window.innerWidth > 980){
            if ((i%2 == 0) && elementInViewport(animatedElements2[i])) {
                animatedElements2[i].classList.add('js-visible');
                j = i+1;
                setTimeout( () => animatedElements2[j].classList.add('js-visible'), 200);
            }
        }
        else {
            if (elementInViewport(animatedElements2[i])) {
                animatedElements2[i].classList.add('js-visible');
            }
        }
    }

    if (elementInViewport(animatedContact)) {
        displayContact();
    }
}

var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "index.html"){
    window.addEventListener('DOMContentLoaded', () => {
        displayHomepage();
        setTimeout( () => HandleAnimate(), 500); // On low width devices, the first elements are visible directly
    });

    window.addEventListener('scroll', () => {
        HandleAnimate();
    });
}
else if (page == "aboutme.html"){
    displayAboutMe();
}