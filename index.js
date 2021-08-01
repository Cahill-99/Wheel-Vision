
//***** CAROUSEL ******

const uparrow = document.querySelector(".uparrowimg");
const downarrow = document.querySelector(".downarrowimg");

const track = document.getElementById("track");
const trackHeight = document.getElementById("track").offsetHeight;
const carouselHeight = document.querySelector(".carousel-container").offsetHeight;

let loader = document.querySelector('.loading')
let bgBox = document.querySelector('.carimage')

let body = document.getElementsByTagName("BODY")[0];

const loadRemove = () => {
    console.log("loaded");
    loader.classList.add("hide");
}

body.onload = () => {
loadRemove()
}






//*** SIDEBAR WHEELS ***



//WHEEL OBJECTS ARRAY

import { wheelsArray } from "./wheels.js"


//LOOP THROUGH WHEELS ARRAY

    wheelsArray.forEach(wheel => {
        let newWheel = document.createElement("IMG");
        
        newWheel.src = wheel.imgSource;
        newWheel.classList.add("wheelstandard");
        newWheel.id = wheel.idName;
        track.appendChild(newWheel);
        console.log(newWheel.id);

        let bgImage = document.querySelector('.carimage')
        newWheel.onclick = function changeWheels() {
            
            loader.classList.remove("hide");
            let tempImage = new Image(200,100);
            tempImage.src = wheel.temp;
            tempImage.onload = () => {
                bgImage.style.backgroundImage = wheel.backImage;
                loader.classList.add("hide");
                tempImage.remove();
            }

        }
        

    });


let index = 0;
let wheelDivision = wheelsArray.length/4;
let roundedDivision = Math.ceil(wheelDivision);
console.log(roundedDivision);

//UPARROW
uparrow.addEventListener("click", () => {
    index--
    track.style.transform = `translateY(-${index * carouselHeight}px)`
    downarrow.classList.remove("hide");

    if(index === 0) {
        uparrow.classList.remove("show");
    }
})

//DOWNARROW
downarrow.addEventListener("click", () => {
    index++;
    uparrow.classList.add("show");
    track.style.transform = `translateY(-${index * carouselHeight}px)`;
    
    if (roundedDivision - 1 === index) {
        downarrow.classList.add("hide");
    }
    
})


//***** WHEEL SHOW AND HIDE *****

/*
let shownWheels = document.querySelector(".displayed-wheels");
let wheelChoice = document.querySelector(".wheel2img");

wheelChoice.addEventListener("click", () => {
    shownWheels.classList.toggle("show");
    wheelChoice.classList.toggle("selected");
})


//***** DRAGGABLE WHEELS *****


//FRONT OR REAR
let activeWheel = document.querySelector(".front-wheel");

//FRONT WHEEL
const el = activeWheel;
el.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mouseMove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = el.getBoundingClientRect();

        el.style.left = rect.left - newX + "px";
        el.style.top = rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseUp() {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseup", mouseUp);
    }
}
*/


