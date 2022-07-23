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

function dispayTabAsClosed(n){
    tabs.children[n].classList.remove("opened");
    tabs.children[n].classList.add("closed");
    mobile_tabs.children[n].classList.remove("opened");
    mobile_tabs.children[n].classList.add("closed");
}

function handleHomeClick(){
    dispayTabAsClosed(openedTab);
    openedTab = 0;
    dispayTabAsOpened(openedTab);
}

function handleAboutMeClick(){
    dispayTabAsClosed(openedTab);
    openedTab = 1;
    dispayTabAsOpened(openedTab);
}

function handleBlogClick(){
    dispayTabAsClosed(openedTab);
    openedTab = 2;
    dispayTabAsOpened(openedTab);
}

function handleContactClick(){
    dispayTabAsClosed(openedTab);
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

for (var i = 0; i < 4; i++){ // Displaying all tabs as closed
    dispayTabAsClosed(i);
}

var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "index.html"){
    document.addEventListener("scroll", switchBetweenHomeAndContact);
    switchBetweenHomeAndContact(); // Set the value of openedTab to either 0 or 3 and displays it
}
else if (page == "aboutme.html"){
    handleAboutMeClick(); // Set the value of openedTab to 1 and displays it
}
else if (page == "blog.html"){
    handleBlogClick(); // Set the value of openedTab to 2 and displays it
}