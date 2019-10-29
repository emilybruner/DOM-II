// Your code goes here

document.querySelectorAll('.img-content').forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.2)";
        el.style.transition = "all 0.3s";
    })
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        el.style.transition = "all 0.3s"
    })
})

let bus = document.querySelector(".funbusimg");

bus.addEventListener("mouseover", (event) => {
    bus.src = "/img/beach1.jpg"
})

bus.addEventListener("dblclick", (event) => {
    bus.src = "/img/fun-bus.jpg"
})