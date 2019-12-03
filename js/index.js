// Your code goes here

//mouseEnter
const imgUp = document.querySelectorAll(".img").forEach(element => {
  element.addEventListener("mouseenter", function() {
    element.style.transform = "scale(1.2)";
    element.style.transition = "transform 0.3s";
  });
});

//mouseLeave
const imgDown = document.querySelectorAll(".img").forEach(element => {
  element.addEventListener("mouseleave", function() {
    element.style.transform = "scale(1.0)";
    element.style.transition = "transform 0.3s";
  });
});
