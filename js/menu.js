const closeIcon= document.querySelector(".mobile-menu__close");
const menu = document.querySelector(".mobile-menu");
const burger = document.getElementById("burger");
const burger2 = document.getElementById("burger2");



function toggleMenu() {
    menu.style.visibility = "visible"
}
function closeBtn() {
    menu.style.visibility = "hidden"

}

burger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", closeBtn)
burger2.addEventListener("click", toggleMenu);
