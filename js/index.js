// Your code goes here

document.querySelectorAll('.img-content').forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.2)";
        el.style.transition = "all 0.3s";
    })
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        el.style.transition = "all 0.3s";
    })
})

let bus = document.querySelector(".funbusimg");

bus.addEventListener("mouseover", () => {
    bus.src = "/img/beach1.jpg"
})

bus.addEventListener("dblclick", () => {
    bus.src = "/img/fun-bus.jpg"
})

document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener("click", () => {
        el.style.color = 'hotpink'
    })
})

const mainStuff = document.querySelector('.home');
window.addEventListener("resize", () => {
    mainStuff.style.backgroundColor = "navy";
    mainStuff.style.color = "white";
})

window.addEventListener("scroll", () => {
    mainStuff.style.backgroundColor = "hotpink";
})
window.addEventListener("wheel", () => {
    mainStuff.style.color = "yellow";
})

document.querySelectorAll(".text-content").forEach(el => {
    document.addEventListener("keydown", event => {
        if (event.isComposing || event.keyCode === 229) {
            return;
        }
        el.style.transform = "rotate(360deg)";
        el.style.transition = "all 1s ease-in-out";
    });

}); ``

const breakImg = document.querySelector('.destinationimg')
breakImg.addEventListener("load", () => {
    breakImg.style.transform = "skewX(20deg)";
})

const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
    event.preventDefault();
})