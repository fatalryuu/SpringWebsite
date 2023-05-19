const buttons = document.querySelectorAll(".dropdown__button");
const divs = document.querySelectorAll(".dropdown__content");

buttons.forEach((button, i) => button.addEventListener("click", () => {
    divs.forEach((div, j) => {
        if (i !== j) {
            div.style.display = "none";
            buttons[j].classList.remove("up");
        }
    });

    const computedStyle = window.getComputedStyle(divs[i]);
    const displayValue = computedStyle.getPropertyValue("display");

    if (displayValue === "none") {
        divs[i].style.display = "block";
        button.classList.add("up");
    } else {
        divs[i].style.display = "none";
        button.classList.remove("up");
    }
}));