/// Index Card Animation
const atropos = new Atropos({
    el: document.querySelector('.my-card'),
});

/// arrow animation in index footer section
const indexFooter = document.querySelector("#index footer");
const mainGrid = document.querySelector(".grid-main");

mainGrid.onscroll = () => {
    if (mainGrid.scrollTop === 0) {
        indexFooter.classList.remove("hide");
        return;
    }
    if (!indexFooter.classList.contains("hide")) {
        indexFooter.classList.add("hide");
        return;
    }
}

/// scroll to element on click
const icons = document.querySelectorAll(".move-to");

icons.forEach((icon) => {
    icon.onclick = (event) => {
        event.preventDefault();
        const elementID = event.srcElement.href.split("#")[1];
        const elementToScrollTo = document.querySelector(`#${elementID}`);

        mainGrid.scrollTo({
            top: elementToScrollTo.offsetTop,
            behavior: "smooth"
        });
    }
});
