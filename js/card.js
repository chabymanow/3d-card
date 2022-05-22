var forEachEntryIn = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) { callback.call(scope, i, array[i]); } };

var containers = document.querySelectorAll(".card_container");

forEachEntryIn(containers, function (idx, el, scope) { connectListener(el); } );


function connectListener(el){
    const card = el.querySelector(".card");
    const image = el.querySelector(".image img");
    const header = el.querySelector(".info h1");
    const subHeader = el.querySelector(".info h3");
    // const text = el.querySelector(".info p");
    const prise = el.querySelector(".info div");

    el.addEventListener("mousemove", (e) =>{
        const x = e.pageX - e.currentTarget.offsetLeft; 
        const y = e.pageY - e.currentTarget.offsetTop;

        let xAxis = (el.offsetWidth / 2 - x) / 10;
        let yAxis = (el.offsetHeight / 2 -y) / 10;
        card.style.transform = "rotateX("+ yAxis + "deg) rotateY("+ -xAxis + "deg)";
    });

    el.addEventListener("mouseenter", (e) =>{
        card.style.transition = "none";
        image.style.transform = "translateZ(80px) rotateZ(-10deg) scale(1.2)";
        header.style.transform = "translateZ(60px)";
        subHeader.style.transform = "translateZ(40px)";
        // text.style.transform = "translateZ(20px)";
        prise.style.transform = "translateZ(100px) translateY(-50px) rotateZ(10deg) scale(2)";
    });

    el.addEventListener("mouseleave", (e) =>{
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
        card.style.transition = "all 500ms ease";
        image.style.transform = "translateZ(0px)";
        header.style.transform = "translateZ(0px)";
        subHeader.style.transform = "translateZ(0px)";
        // text.style.transform = "translateZ(0px)";
        prise.style.transform = "translateZ(0px)";
    });
};