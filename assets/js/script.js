var nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 120) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

