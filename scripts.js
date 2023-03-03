const menuActive = document.getElementById("menu_active");
const menuClosed = document.getElementById("menu_closed");
const sideBar = document.querySelector(".side_bar");
const content = document.querySelector(".content");

menuActive.addEventListener("click", () => {
  sideBar.style.left = "0";
  menuActive.style.display = "none";
  menuClosed.style.display = "block";
  content.style.filter = "blur(5px)";
});

menuClosed.addEventListener("click", () => {
  sideBar.style.left = "-200px";
  menuActive.style.display = "block";
  menuClosed.style.display = "none";
  content.style.filter = "none";
});