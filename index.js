
//***** CAROUSEL ******

const uparrow = document.querySelector(".uparrowimg");
const downarrow = document.querySelector(".downarrowimg");

const track = document.getElementById("track");
const trackHeight = document.getElementById("track").offsetHeight;
const carouselHeight = document.querySelector(".carousel-container").offsetHeight;
const carousel =  document.querySelector(".carousel-container");

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


//*** FILTER ***




// FILTER OBJECTS ARRAY 

import { filterArray } from "./wheels.js";

//LOOP THROUGH FILTER ARRAY

    let filterContainer = document.createElement("DIV");
    filterContainer.classList.add("filtercontainer");
    carousel.appendChild(filterContainer);
    let filterOptions;

    filterArray.forEach(filter => {
        let newFilter = document.createElement("button");

        newFilter.innerHTML = filter.btnText;
        newFilter.classList.add("filterstandard");
        newFilter.classList.add("filterButton");
        filterContainer.appendChild(newFilter);

        newFilter.onclick = function showOptions() {

            filterContainer.style.display = filter.hide;
            let selectedFilter = filter.id;
            filterOptions = document.createElement("DIV");
            filterOptions.classList.add("filteroptions");
            carousel.appendChild(filterOptions);

            switch (selectedFilter) {
                case "brand":
                    let brand1 = document.createElement("button");
                    filterOptions.appendChild(brand1);
                    brand1.innerHTML = "3SDM"

                    let brand2 = document.createElement("button");
                    filterOptions.appendChild(brand2);
                    brand2.innerHTML = "ENKEI"

                    let brand3 = document.createElement("button");
                    filterOptions.appendChild(brand3);
                    brand3.innerHTML = "RAYS"

                    let brand4 = document.createElement("button");
                    filterOptions.appendChild(brand4);
                    brand4.innerHTML = "WORK"
                    
                    break;

                case "colour":
                    let colour1 = document.createElement("button");
                    filterOptions.appendChild(colour1);
                    colour1.innerHTML = "BLACK";

                    let colour2 = document.createElement("button");
                    filterOptions.appendChild(colour2);
                    colour2.innerHTML = "GOLD";

                    let colour3 = document.createElement("button");
                    filterOptions.appendChild(colour3);
                    colour3.innerHTML = "GREY";

                    let colour4 = document.createElement("button");
                    filterOptions.appendChild(colour4);
                    colour4.innerHTML = "SILVER";

                    let colour5 = document.createElement("button");
                    filterOptions.appendChild(colour5);
                    colour5.innerHTML = "WHITE";

                    break;

                case "spokes":
                    let spokes1 = document.createElement("button");
                    filterOptions.appendChild(spokes1);
                    spokes1.innerHTML = "5"

                    let spokes2 = document.createElement("button");
                    filterOptions.appendChild(spokes2);
                    spokes2.innerHTML = "6"

                    let spokes3 = document.createElement("button");
                    filterOptions.appendChild(spokes3);
                    spokes3.innerHTML = "6+"

                    break;
            }
            console.log(filterOptions);
            console.log(selectedFilter);
        }
    })

    


    let filterButton = document.querySelector(".filtericonimg");
    let fltrIndex = 1;

filterButton.onclick = function toggleFilter() {

    fltrIndex++
    console.log(fltrIndex);
    
    if (fltrIndex % 2 == 0) {
        track.style.display = "none";
        filterContainer.style.display = "flex";
        filterButton.src = "Assets/Group 25 Active.png";
    } else {
        track.style.display = "flex";
        filterContainer.style.display = "none";
        filterButton.src = "Assets/Group 25.png";
        filterOptions.remove();
    }
}





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
        downarrow.classList.add("hide")
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


