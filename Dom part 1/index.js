let a = document.getElementById("specify");
let b = document.getElementsByClassName("heading");
let c = document.getElementsByTagName("h3");
let d = document.querySelector(".heading");
let e = document.querySelectorAll(".heading");

let hell = document.getElementById("h");

let sp = document.createElement("h3");
sp.textContent = "Hello";

hell.insertAdjacentHTML('afterEnd',sp);
