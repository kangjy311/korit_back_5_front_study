const menuButton = document.querySelector(".menu-button");

menuButton.onclick = () => {
    const sideBarLayout = document.querySelector(".side-bar-layout");
    sideBarLayout.classList.add("side-bar-show");
    const sidebarContainer = document.querySelector(".side-bar-container");
    sidebarContainer.classList.add("side-bar-container-show");
}

const closeButton = document.querySelector(".side-bar-close-button");

closeButton.onclick = () => {
    const sideBarLayout = document.querySelector(".side-bar-layout");
    sideBarLayout.classList.remove("side-bar-show");
    const sidebarContainer = document.querySelector(".side-bar-container");
    sidebarContainer.classList.remove("side-bar-container-show");
}