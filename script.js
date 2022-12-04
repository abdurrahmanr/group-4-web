const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");
const gotop = document.querySelector(".goTop");

menu.addEventListener("click", () =>{
    menu.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    nav.classList.remove("active");
}))

document.querySelector(".logo").addEventListener("click", () =>{
    menu.classList.remove("active");
    nav.classList.remove("active");
})

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        gotop.classList.add("active");
    } else {
        gotop.classList.remove("active");
    }
})