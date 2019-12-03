// Your code goes here

//mouseEnter
const imgUp = document.querySelectorAll(".img").forEach(element => {
  element.addEventListener("mouseenter", () => {
    element.style.transform = "scale(2.5)";
    element.style.transition = "transform 0.3s";
  });
});

//mouseLeave
const imgDown = document.querySelectorAll(".img").forEach(element => {
  element.addEventListener("mouseleave", () => {
    element.style.transform = "scale(1.0)";
    element.style.transition = "transform 0.3s";
  });
});

//on click
const navColor = document.querySelector(".main-navigation");
navColor.addEventListener("click", e => {
  navColor.style.backgroundColor = "seagreen";
  navColor.style.transition = "1.7s";
  e.stopPropagation();
});

const bodyColor = document.querySelector("body");
bodyColor.addEventListener("click", e => {
  bodyColor.style.backgroundColor = "teal";
  bodyColor.style.transition = "1.7s";
  e.stopPropagation();
});

// double click
const navColorReturn = document.querySelector(".main-navigation");
navColorReturn.addEventListener("dblclick", e => {
  navColorReturn.style.backgroundColor = "white";
  e.stopPropagation();
});

const bodyColorReturn = document.querySelector("body");
bodyColorReturn.addEventListener("dblclick", () => {
  bodyColorReturn.style.backgroundColor = "white";
});

// mouseWheel

//const wheel = document.querySelector("img");
