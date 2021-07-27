
//***** CAROUSEL ******

const uparrow = document.querySelector(".uparrowimg");
const downarrow = document.querySelector(".downarrowimg");

const track = document.getElementById("track");
const trackHeight = document.getElementById("track").offsetHeight;
console.log(trackHeight);
const carouselHeight = document.querySelector(".carousel-container").offsetHeight;


let index = 0;

//TEST ZONE


//*** SIDEBAR WHEELS ***

//This has messed up the "trackHeight" measurement for some reason


    const wheel1 = document.createElement("IMG");
    wheel1.src = "img/EnkeiGTC02SilverGC.png";
    wheel1.classList.add("wheelstandard");
    track.appendChild(wheel1);

    const wheel2 = document.createElement("IMG");
    wheel2.src = "img/WorkMeisterL1GunmetalGC.png";
    wheel2.classList.add("wheelstandard");
    track.appendChild(wheel2);

    const wheel3 = document.createElement("IMG");
    wheel3.src = "img/3SDM005MachinedGC.png";
    wheel3.classList.add("wheelstandard");
    track.appendChild(wheel3);

    const wheel4 = document.createElement("IMG");
    wheel4.src = "img/EnkeiTM7GreyGC.png";
    wheel4.classList.add("wheelstandard");
    track.appendChild(wheel4);

    const wheel5 = document.createElement("IMG");
    wheel5.src = "img/EnkeiTM7BlackGC.png";
    wheel5.classList.add("wheelstandard");
    track.appendChild(wheel5);

    const wheel6 = document.createElement("IMG");
    wheel6.src = "img/EnkeiRPF1BlackChromeGC.png";
    wheel6.classList.add("wheelstandard");
    track.appendChild(wheel6);

    const wheel7 = document.createElement("IMG");
    wheel7.src = "img/EnkeiRPF1GoldGC.png";
    wheel7.classList.add("wheelstandard");
    track.appendChild(wheel7);

    const wheel8 = document.createElement("IMG");
    wheel8.src = "img/EnkeiRPF1SilverGC.png";
    wheel8.classList.add("wheelstandard");
    track.appendChild(wheel8);

    const wheel9 = document.createElement("IMG");
    wheel9.src = "img/RaysTE37Gravel2GC.png";
    wheel9.classList.add("wheelstandard");
    track.appendChild(wheel9);

    const wheel10 = document.createElement("IMG");
    wheel10.src = "img/VolkG16GC.png";
    wheel10.classList.add("wheelstandard");
    track.appendChild(wheel10);

    const wheel11 = document.createElement("IMG");
    wheel11.src = "img/WorkCRKiwamiBlack.png";
    wheel11.classList.add("wheelstandard");
    track.appendChild(wheel11);

    const wheel12 = document.createElement("IMG");
    wheel12.src = "img/WorkCRKiwamiSilverGC.png";
    wheel12.classList.add("wheelstandard");
    track.appendChild(wheel12);







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
    track.style.transform = `translateY(-${index * carouselHeight}px)`;
    console.log(trackHeight - (index * carouselHeight))
    console.log("carouselHieght" + carouselHeight);
    if (trackHeight - (index * carouselHeight) <= carouselHeight + 10) {
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

let wheelsArray = [
        
        {
            name: "wheel1",
            colour: "silver",
            spokes: 6,
            brand: "enkei"
        },
        {
            name: "wheel2",
            colour: "grey",
            spokes: 6,
            brand: "work"
        },
        {
            name: "wheel3",
            colour: "silver",
            spokes: 5,
            brand: "3SDM"
        },
        {
            name: "wheel4",
            colour: "silver",
            spokes: "6+",
            brand: "enkei"
        },
        {
            name: "wheel5",
            colour: "black",
            spokes: "6+",
            brand: "enkei"
        },
        {
            name: "wheel6",
            colour: "grey",
            spokes: 6,
            brand: "enkei"
        },
        {
            name: "wheel7",
            colour: "gold",
            spokes: 6,
            brand: "enkei"
        },
        {
            name: "wheel8",
            colour:"white",
            spokes: 6,
            brand: "enkei"
        },
        {
            name: "wheel9",
            colour: "white",
            spokes: 6,
            brand: "rays"
        },
        {
            name: "wheel10",
            colour: "grey",
            spokes: "6+",
            brand: "rays"
        },
        {
            name: "wheel11",
            colour: "black",
            spokes: 5,
            brand: "work"
        },
        {
            name: "wheel12",
            colour: "silver",
            spokes: 5,
            brand:"work"
        }
    ]



// *** CHANGE BACKGROUND IMAGE ON CLICK ***

const wheelImageArray = ["img/EnkeiGTC02SilverGC.png","img/WorkMeisterL1GunmetalGC.png","img/3SDM005MachinedGC.png",
                        "img/EnkeiTM7GreyGC.png","img/EnkeiTM7BlackGC.png","img/EnkeiRPF1BlackChromeGC.png","img/EnkeiRPF1GoldGC.png",
                        "img/EnkeiRPF1SilverGC.png","img/RaysTE37Gravel2GC.png","img/VolkG16GC.png","img/WorkCRKiwamiBlack.png",
                        "img/WorkCRKiwamiSilverGC.png"]





function printID(e) {
    e = e || window.event;
    e = e.target;



    let chosenWheel = e.id;



    let bgImage = document.querySelector('.carimage')
    console.log(chosenWheel);
    
 

    switch(chosenWheel) {

        case "wheel1img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel1 installed.jpg')";
            break;
        
        case "wheel2img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel2 installed.jpg')";
            break;
        
        case "wheel3img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel3 installed.jpg')";
            break;
        
        case "wheel4img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel4 installed.jpg')";
            break;
            
        case "wheel5img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel5 installed.jpg')";
            break;
        
        case "wheel6img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel6 installed.jpg')";
            break;
            
        case "wheel7img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel7 installed.jpg')";
            break;
        
        case "wheel8img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel8 installed.jpg')";
            break;
            
        case "wheel9img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel9 installed.jpg')";
            break;
        
        case "wheel10img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel10 installed.jpg')";
            break;
            
        case "wheel11img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel11 installed.jpg')";

            break;
        
        case "wheel12img":
            bgImage.style.backgroundImage = "url('img/Chosen Wheels/Wheel12 installed.jpg')";
            break;
    }
}

let loader = document.querySelector('.loading')
let bgBox = document.querySelector('.carimage')

const loadRemove = () => {
    console.log("loaded");
    loader.remove();
}


