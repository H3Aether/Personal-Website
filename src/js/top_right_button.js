const navbar = document.querySelector(".mobile-navbar");
var isDisplayed = false;

function handleNavbarDisplay(){
    if (isDisplayed){
        navbar.style.transform = "translateX(100%)";
    }
    else {
        navbar.style.transform = "translateX(0)";
    }
    isDisplayed = !isDisplayed;
}

function handleTopRightClick(){
    if (window.innerWidth > 800){
        console.log("change language");
    }
    else {
        handleNavbarDisplay();
    }
}