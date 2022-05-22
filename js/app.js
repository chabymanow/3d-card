
const card = document.querySelector(".card");
const image = document.querySelector(".ship img");
const header = document.querySelector(".info h1");
const subHeader = document.querySelector(".info h3");
const text = document.querySelector(".info p");

var forEachEntryIn = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) { callback.call(scope, i, array[i]); } };

var containers = document.querySelectorAll(".container");

forEachEntryIn(containers, function (idx, el, scope) { connectListener(el); } );


function connectListener(el){
    const card = el.querySelector(".card");
    const image = el.querySelector(".ship img");
    const header = el.querySelector(".info h1");
    const subHeader = el.querySelector(".info h3");
    const text = el.querySelector(".info p");

    el.addEventListener("mousemove", (e) =>{
        const x = e.pageX - e.currentTarget.offsetLeft; 
        const y = e.pageY - e.currentTarget.offsetTop;

        let xAxis = (el.offsetWidth / 2 - x) / 10;
        let yAxis = (el.offsetHeight / 2 -y) / 10;
        card.style.transform = "rotateX("+ yAxis + "deg) rotateY("+ -xAxis + "deg)";
    });

    el.addEventListener("mouseenter", (e) =>{
        card.style.transition = "none";
        image.style.transform = "translateZ(80px) rotateZ(-30deg)";
        header.style.transform = "translateZ(60px)";
        subHeader.style.transform = "translateZ(40px)";
        text.style.transform = "translateZ(20px)";
    });

    el.addEventListener("mouseleave", (e) =>{
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
        card.style.transition = "all 500ms ease";
        image.style.transform = "translateZ(0px)";
        header.style.transform = "translateZ(0px)";
        subHeader.style.transform = "translateZ(0px)";
        text.style.transform = "translateZ(0px)";
    });
};