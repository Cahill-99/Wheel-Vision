
//***** CAROUSEL ******

const uparrow = document.querySelector(".uparrowimg");
const downarrow = document.querySelector(".downarrowimg");

const track = document.getElementById("track");
const trackHeight = document.getElementById("track").offsetHeight;
const carouselHeight = document.querySelector(".carousel-container").offsetHeight;

let loader = document.querySelector('.loading')
let bgBox = document.querySelector('.carimage')

const loadRemove = () => {
    console.log("loaded");
    loader.classList.add("hide");
}



let index = 0;

//TEST ZONE


//*** SIDEBAR WHEELS ***



//WHEEL OBJECTS ARRAY
let wheelsArray = [
        
    {
        idName: "wheel1img",
        imgSource:"img/EnkeiGTC02SilverGC.png",
        colour: "silver",
        spokes: 6,
        brand: "enkei",
        backImage: "url('img/Chosen Wheels/Wheel1 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel1 installed-min.jpg'
    },
    {
        idName: "wheel2img",
        imgSource:"img/WorkMeisterL1GunmetalGC.png",
        colour: "grey",
        spokes: 6,
        brand: "work",
        backImage: "url('img/Chosen Wheels/Wheel2 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel2 installed-min.jpg'
    },
    {
        idName: "wheel3img",
        imgSource:"img/3SDM005MachinedGC.png",
        colour: "silver",
        spokes: 5,
        brand: "3SDM",
        backImage: "url('img/Chosen Wheels/Wheel3 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel3 installed-min.jpg'
    },
    {
        idName: "wheel4img",
        imgSource:"img/EnkeiTM7GreyGC.png",
        colour: "silver",
        spokes: "6+",
        brand: "enkei",
        backImage: "url('img/Chosen Wheels/Wheel4 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel4 installed-min.jpg'
    },
    {
        idName: "wheel5img",
        imgSource:"img/EnkeiTM7BlackGC.png",
        colour: "black",
        spokes: "6+",
        brand: "enkei",
        backImage: "url('img/Chosen Wheels/Wheel5 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel5 installed-min.jpg'
    },
    {
        idName: "wheel6img",
        imgSource:"img/EnkeiRPF1BlackChromeGC.png",
        colour: "grey",
        spokes: 6,
        brand: "enkei",
        backImage: "url('img/Chosen Wheels/Wheel6 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel6 installed-min.jpg'
    },
    {
        idName: "wheel7img",
        imgSource:"img/EnkeiRPF1GoldGC.png",
        colour: "gold",
        spokes: 6,
        brand: "enkei",
        backImage: "url('img/Chosen Wheels/Wheel7 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel7 installed-min.jpg'
    },
    {
        idName: "wheel8img",
        imgSource:"img/EnkeiRPF1SilverGC.png",
        colour:"white",
        spokes: 6,
        brand: "enkei",
        backImage: "url('img/Chosen Wheels/Wheel8 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel8 installed-min.jpg'
    },
    {
        idName: "wheel9img",
        imgSource:"img/RaysTE37Gravel2GC.png",
        colour: "white",
        spokes: 6,
        brand: "rays",
        backImage: "url('img/Chosen Wheels/Wheel9 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel9 installed-min.jpg'
    },
    {
        idName: "wheel10img",
        imgSource:"img/VolkG16GC.png",
        colour: "grey",
        spokes: "6+",
        brand: "rays",
        backImage: "url('img/Chosen Wheels/Wheel10 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel10 installed-min.jpg'
    },
    {
        idName: "wheel11img",
        imgSource:"img/WorkCRKiwamiBlack.png",
        colour: "black",
        spokes: 5,
        brand: "work",
        backImage: "url('img/Chosen Wheels/Wheel11 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel11 installed-min.jpg'
    },
    {
        idName: "wheel12img",
        imgSource:"img/WorkCRKiwamiSilverGC.png",
        colour: "silver",
        spokes: 5,
        brand:"work",
        backImage: "url('img/Chosen Wheels/Wheel12 installed-min.jpg')",
        temp: 'img/Chosen Wheels/Wheel12 installed-min.jpg'
    }
]


//LOOP THROUGH WHEELS ARRAY


    for(let i = 0 ; i < wheelsArray.length; i++) {
        let newWheel = document.createElement("IMG");
        
        newWheel.src = wheelsArray[i].imgSource;
        newWheel.classList.add("wheelstandard");
        newWheel.id = wheelsArray[i].idName;
        track.appendChild(newWheel);
        console.log(newWheel.id);

        let bgImage = document.querySelector('.carimage')
        newWheel.onclick = function changeWheels() {
            
            loader.classList.remove("hide");
            let tempImage = new Image(200,100);
            tempImage.src = wheelsArray[i].temp;
            tempImage.onload = () => {
                bgImage.style.backgroundImage = wheelsArray[i].backImage;
                loader.classList.add("hide");
                tempImage.remove();
            }
            console.log("clicked");
            console.log(tempImage.src);

        }
        
    }
        
    //This has messed up the "trackHeight" measurement for some reason



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


