// JavaScript Document
console.log("hi");

var navButton = document.querySelector("nav div:first-of-type");

navButton.onclick = toggleMenu;

function toggleMenu(){
    var nav = document.querySelector("nav div:nth-of-type(2)")
    nav.classList.toggle("toonMenu")
}