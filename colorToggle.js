let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarA = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";

        let arrayLength = getSidebarA.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarA[i].style.opacity = "1"
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSidebar.style.width = "50px";

        let arrayLength = getSidebarA.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarA[i].style.opacity = "0"
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
};

const changeClassWhiteBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background")
};
const eventChangeColorButton = function () {
    const changeColorButton = document.getElementById("Red");
    changeColorButton.addEventlistener("click", function () {
        changeClassWhiteBackground();
    });
};

eventChangeColorButton();