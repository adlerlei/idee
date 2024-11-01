// navbar burger trigger
document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
        });
    });
});

// navbar burger hidden |
function navbar_burger_hidden() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-item.is-hidden-touch"), 0);
    $navbarBurgers.forEach((el) => {
        el.classList.toggle("is-hidden-touch");
    });
}