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
