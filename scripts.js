// Get the close button element
var closeBtn = document.getElementById("close-btn");

// Add a click event listener to the close button
closeBtn.addEventListener("click", function() {
  // Get the aside element
  var aside = document.querySelector("aside");
  // Add a class to the aside element that hides it
  aside.classList.add("hidden");
});