const position = 50;
const sensitivity0 = 100;
const sensitivity1 = 150;

const htmlElements = document.querySelectorAll(".parallax");
const parallaxElements = [];

function getInitialX(el){
    const str = el.style.transform;
    const str_split = str.split(" ");
    const initial_x = str_split[0].substring(11, str_split[0].length - 3);
    return parseInt(initial_x);
}

function getInitialY(el){
    const str = el.style.transform;
    const str_split = str.split(" ");
    const initial_y = str_split[1].substring(11, str_split[1].length - 3);
    return parseInt(initial_y);
}

htmlElements.forEach(el => {
    const dict = { element :el,
                 initial_x : getInitialX(el),
                 initial_y : getInitialY(el),
                 sensitivity : parseInt(el.name) };
    parallaxElements.push(dict);
});

function parallax(event) {
    const mouseX = event.pageX / window.innerWidth;
    const mouseY = event.pageY / window.innerHeight;
    const offsetX = (0.5 - mouseX);
    const offsetY = (0.5 - mouseY);

    parallaxElements.forEach(pel => {
        const x = pel.initial_x + (offsetX * pel.sensitivity);
        const y = pel.initial_y + (offsetY * pel.sensitivity);
        pel.element.style.transform = `translate(${x}px, ${y}px)`;
    });
}

document.addEventListener("mousemove", parallax);