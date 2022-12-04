const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");

menu.addEventListener("click", () =>{
    menu.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    nav.classList.remove("active");
}))