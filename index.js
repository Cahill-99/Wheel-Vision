
//***** CAROUSEL ******

const uparrow = document.querySelector(".uparrowimg");
const downarrow = document.querySelector(".downarrowimg");

const track = document.querySelector(".track");
const trackHeight = document.querySelector(".track").offsetHeight;

const carouselHeight = document.querySelector(".carousel-container").offsetHeight;


let index = 0;

//TEST ZONE
console.log(carouselHeight);


//UPARROW
uparrow.addEventListener("click", () => {
    index--
    track.style.transform = `translateY(-${index * carouselHeight}px)`
    console.log(trackHeight - (index * carouselHeight));
    downarrow.classList.remove("hide");

    if(index === 0) {
        uparrow.classList.remove("show");
    }
})

//DOWNARROW
downarrow.addEventListener("click", () => {
    index++;
    uparrow.classList.add("show");
    track.style.transform = `translateY(-${index * carouselHeight}px)`
    uparrow.classList.add("show");
    console.log(trackHeight - (index * carouselHeight))

    if (trackHeight - (index * carouselHeight) <= carouselHeight + 10) {
       downarrow.classList.add("hide");

    }
})


//***** WHEEL SHOW AND HIDE *****

let shownWheels = document.querySelector(".displayed-wheels");
let wheelChoice = document.querySelector(".wheel2img");

wheelChoice.addEventListener("click", () => {
    shownWheels.classList.toggle("show");
    wheelChoice.classList.toggle("border");
})


//***** DRAGGABLE WHEELS *****


//FRONT WHEEL
const el = document.querySelector(".front-wheel");

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


