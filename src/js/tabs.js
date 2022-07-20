const tabs = document.querySelector(".tabs");
const mobile_tabs = document.querySelector(".mobile-tabs");
const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var openedTab = 0;

function dispayTabAsOpened(n){
    tabs.children[n].classList.remove("closed");
    tabs.children[n].classList.add("opened");
    mobile_tabs.children[n].classList.remove("closed");
    mobile_tabs.children[n].classList.add("opened");
    navbar.style.transform = "translateX(100%)";
    isDisplayed = false;
}

function dispayPreviousTabAsClosed(){
    tabs.children[openedTab].classList.remove("opened");
    tabs.children[openedTab].classList.add("closed");
    mobile_tabs.children[openedTab].classList.remove("opened");
    mobile_tabs.children[openedTab].classList.add("closed");
}

function handleHomeClick(){
    dispayPreviousTabAsClosed();
    openedTab = 0;
    dispayTabAsOpened(openedTab);
}

function handleAboutMeClick(){
    dispayPreviousTabAsClosed();
    openedTab = 1;
    dispayTabAsOpened(openedTab);
}

function handleBlogClick(){
    dispayPreviousTabAsClosed();
    openedTab = 2;
    dispayTabAsOpened(openedTab);
}

function handleContactClick(){
    dispayPreviousTabAsClosed();
    openedTab = 3;
    dispayTabAsOpened(openedTab);
}

function switchBetweenHomeAndContact(){
    var scroll_percentage = (document.documentElement.scrollTop || document.body.scrollTop)/maxScroll;
    if (scroll_percentage < 0.70){ // Top part of the page, Home tab is opened
        handleHomeClick();
    }
    else { // Bottom part of the page, Contact tab is opened
        handleContactClick();
    }
}

document.addEventListener("scroll", switchBetweenHomeAndContact);