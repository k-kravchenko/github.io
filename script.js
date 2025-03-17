console.log("Hello, this is my JavaScript file!");
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".humburger-icon");
    const navLinks = document.querySelector(".hb-menu-open");
    const closeIcon = document.querySelector(".close-icon");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    })

    closeIcon.addEventListener("click", function () {
        navLinks.classList.remove("active");
    })
})