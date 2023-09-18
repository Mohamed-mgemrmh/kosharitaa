
let menuLinks = document.querySelectorAll(".inner-text");
let clickedElement = null;

menuLinks.forEach(function(element) {
    element.onclick = function () {
        
        if (clickedElement !== null) {
            clickedElement.classList.remove("clicked");
        }
        element.classList.toggle("clicked")
        clickedElement = element;
    }
});

let hearts = document.querySelectorAll(".heart");
hearts.forEach(function(element) {
    element.onclick = function() {
        element.classList.toggle("clicked-heart");
    }
});

document.addEventListener("scroll", function () {

    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const threshold = 700;
    const itemToToggle = document.querySelector(".sticky-element");

    if (scrollY <= threshold)
    {
        itemToToggle.style.display = "none";
    }
    else
    {
        itemToToggle.style.display = "flex";
    }
});
