const navbar = document.querySelector(".mobile-navbar");
var isDisplayed = false;

const elementsToBlur = [];
elementsToBlur.push(document.querySelector(".homepage-background")); // Homepage
elementsToBlur.push(document.querySelector(".skills-background")); // Skills
elementsToBlur.push(document.querySelector(".contact-background")); // Contact

// function blurBackground(){
//     if (isDisplayed){
//         var blur_amount = "blur(3px)";
//     }
//     else {
//         var blur_amount = "none";
//     }
//     elementsToBlur.forEach(element => {
//         element.style.filter = blur_amount;
//     });
// }

function handleNavbarDisplay(){
    if (isDisplayed){ // If it on screen, it is closed
        navbar.style.transform = "translateX(100%)";
    }
    else { // If it is not on screen, it is opened
        navbar.style.transform = "translateX(0)";
    }
    isDisplayed = !isDisplayed;
    // blurBackground()
}

function handleTopRightClick(){
    if (window.innerWidth > 800){ // On desktop
        console.log("change language"); // The language is changed
    }
    else { // On mobile
        handleNavbarDisplay(); // The navbar is opened or closed
    }
}