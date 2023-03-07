const menuActive = document.getElementById("menu_active");
const menuClosed = document.getElementById("menu_closed");
const sideBar = document.querySelector(".side_bar");
const content = document.querySelector(".content");
const body = document.querySelector("body");

menuActive.addEventListener("click", () => {
    sideBar.style.left = "0";
    menuActive.style.display = "none";
    menuClosed.style.display = "block";
    content.classList.add("blur"); // add this line to apply blur effect
    body.style.overflow = "hidden";
  });
  
  menuClosed.addEventListener("click", () => {
    sideBar.style.left = "-200px";
    menuActive.style.display = "block";
    menuClosed.style.display = "none";
    content.classList.remove("blur"); // add this line to remove blur effect
    body.style.overflow = "auto";
  });