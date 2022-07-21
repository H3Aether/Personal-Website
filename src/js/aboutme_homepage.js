const aboutme_div = document.querySelector(".aboutme-div");
const background_div = document.querySelector(".homepage-background");

function adaptDivHeight(){
    var div_height = aboutme_div.offsetHeight;
    if (window.innerWidth > 1430){ // If the image is next to the text
        if (div_height > 0.82*window.innerHeight){
            console.log("too high");
            var new_background_height = div_height/0.82;
            background_div.style.height = new_background_height + "px"; 
        }
    }
}

window.addEventListener("DOMContentLoaded", adaptDivHeight);
window.addEventListener("resize", adaptDivHeight);