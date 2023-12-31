/// Index Card Animation
const atropos = new Atropos({
    el: document.querySelector('.my-card'),
});

/// arrow animation in index footer section
const indexFooter = document.querySelector("#index footer");
const mainGrid = document.querySelector(".grid-main");

let justOnce = true;
const imagen1 = document.querySelector("#about .images .octo-wrap:nth-child(1)");
const imagen2 = document.querySelector("#about .images .octo-wrap:nth-child(2)");
const imagen3 = document.querySelector("#about .images .octo-wrap:nth-child(3)");
const wHeight = window.innerHeight;
const limitTop = wHeight / 3;
const limitDown = wHeight - (wHeight / 3);


mainGrid.onscroll = () => {
    if (mainGrid.scrollTop === 0) {
        indexFooter.classList.remove("hide");
        return;
    } else if (!indexFooter.classList.contains("hide")) {
        indexFooter.classList.add("hide");
        return;
    }
    if (justOnce) {
        if (limitTop < imagen2.getBoundingClientRect().top && imagen2.getBoundingClientRect().top < limitDown) {
            imagen1.classList.add("entrada1");
            imagen1.classList.remove("hide");
            imagen2.classList.add("entrada2");
            imagen2.classList.remove("hide");
            imagen3.classList.add("entrada1");
            imagen3.classList.remove("hide");
            justOnce = false;
        }
    }

}

// if there is not JS support, the images will be shown
// and scroll animation will not be applied
imagen1.classList.add("hide");
imagen2.classList.add("hide");
imagen3.classList.add("hide");

/// scroll to element on click on the menu & main grid
const icons = document.querySelectorAll(".move-to");
console.log(icons);

icons.forEach((icon) => {
    icon.onclick = (event) => {
        event.preventDefault();
        const elementID = event.srcElement.href.split("#")[1];
        const elementToScrollTo = document.querySelector(`#${elementID}`);

        // if the window is smaller than 768px, the scroll will need to be adjusted
        let adjustment = 0;
        if (window.innerWidth < 768) {
            const tittle = document.querySelector("#about h2");
            const tittleHeight = tittle.getBoundingClientRect().height;
            adjustment = tittleHeight + 20;
        }

        mainGrid.scrollTo({
            top: elementToScrollTo.offsetTop - adjustment,
            behavior: "smooth"
        });
    }
});

/// scroll to element on click on titles
const tittles = document.querySelectorAll("h2");
tittles.forEach((title) => {
    title.onclick = (event) => {
        const section = title.parentElement;

        // if the window is smaller than 768px, the scroll will need to be adjusted
        let adjustment = 0;
        if (window.innerWidth < 768) {
            const tittleHeight = title.getBoundingClientRect().height;
            adjustment = tittleHeight + 20;
        }

        mainGrid.scrollTo({
            top: section.offsetTop - adjustment,
            behavior: "smooth"
        });
    }
});

