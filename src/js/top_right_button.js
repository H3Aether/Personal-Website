const navbar = document.querySelector(".mobile-navbar");
var isDisplayed = false;

function handleNavbarDisplay(){
    if (isDisplayed){ // If it on screen, it is closed
        navbar.style.transform = "translateX(100%)";
    }
    else { // If it is not on screen, it is opened
        navbar.style.transform = "translateX(0)";
    }
    isDisplayed = !isDisplayed;
}

function changeLanguage(){
    const lang = document.getElementsByTagName('html')[0].getAttribute('lang');
    if (lang === "en"){ // If in english, change to french
        var newLang = "fr";
    }
    else { // If in french, change to english
        var newLang = "en";
    }
    window.location.href = "../" + newLang + "/" + page; // Redirect to the same page in the new language
}

function handleTopRightClick(){
    if (window.innerWidth > 800){ // On desktop, the language flag is displayed
        changeLanguage();
    }
    else { // On mobile
        handleNavbarDisplay(); // The navbar is opened or closed
    }
}