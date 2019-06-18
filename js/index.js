// Your code goes here

// 1. Change h1 color on mouseenter
const headerH1 = document.querySelector("h1");
headerH1.addEventListener("mouseenter", (event) => {
    headerH1.style.color = "red";
});
// 2. Change h1 font family on mouseleave
headerH1.addEventListener("mouseleave", (event) => {
    headerH1.style.color = "black";
});

// 3. Change h2 background on mouseover
const headerH2 = document.querySelector("header h2");
headerH2.addEventListener("mouseover", (event) => {
    headerH2.style.background = "red";
});
// 4. Change h2 background on mouseout
headerH2.addEventListener("mouseout", (event) => {
    headerH2.style.background = "white";
});

// 5. Change nav link to serif on mousedown
const navLink = document.querySelector("a");
navLink.addEventListener("mousedown", (event) => {
    event.stopPropagation();
    navLink.style.fontFamily = "serif";
});
// 6. Change nav link to sans-serif on mouseup
navLink.addEventListener("mouseup", (event) => {
    event.stopPropagation();
    navLink.style.fontFamily = "sans-serif";
});
// 7. 
navLink.addEventListener("click", (event) => {
    navLink.style.background = "purple";
    navLink.style.color = "white";
});

// 8. Alert & hide image on dblclick
const image = document.querySelector("div header img");
image.addEventListener("dblclick", (event) => {
    image.style.visibility = "hidden";
    alert("The picture is about to disappear!");
});

// 9. Change background on copy
const para = document.querySelector("p");
para.addEventListener('copy', (event) => {
    event.target.style.background = "green";
})

// 10. 


// Stop propagation
const nav = document.querySelector("nav");
nav.addEventListener("mousedown", (event) => {
    nav.style.backgroundColor = "blue";
});
nav.addEventListener("mouseup", (event) => {
    nav.style.backgroundColor = "white";
});

// Prevent default
navLink.addEventListener("click", (event) => {
    event.preventDefault();
});