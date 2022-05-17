const container = document.querySelector(".container");
const card = document.querySelector(".card");
const image = document.querySelector(".ship img");
const header = document.querySelector(".info h1");
const subHeader = document.querySelector(".info h3");
const text = document.querySelector(".info p");

container.addEventListener("mousemove", (e) =>{
    let xAxis = (window.innerWidth / 2 -e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 -e.pageY) / 10;

    card.style.transform = "rotateX("+ yAxis + "deg) rotateY("+ -xAxis + "deg)";
});

container.addEventListener("mouseenter", (e) =>{
    card.style.transition = "none";
    image.style.transform = "translateZ(80px) rotateZ(-30deg)";
    // image.style.transform = "rotateZ(-30deg)";
    header.style.transform = "translateZ(60px)";
    subHeader.style.transform = "translateZ(40px)";
    text.style.transform = "translateZ(20px)";
});

container.addEventListener("mouseleave", (e) =>{
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    card.style.transition = "all 500ms ease";
    image.style.transform = "translateZ(0px)";
    header.style.transform = "translateZ(0px)";
    subHeader.style.transform = "translateZ(0px)";
    text.style.transform = "translateZ(0px)";
});

