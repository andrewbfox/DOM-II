// Your code goes here

// Change h1 color
const headerH1 = document.querySelector("h1");
headerH1.addEventListener("mouseover", (event) => {
    headerH1.style.color = "red";
});
headerH1.addEventListener("mouseleave", (event) => {
    headerH1.style.color = "green";
});

// Hide image
const headerH2 = document.querySelector("div header img");
headerH2.addEventListener("dblclick", (event) => {
        headerH2.style.visibility = "hidden";
});

// Change background on copy
const para = document.querySelector("p");
para.addEventListener('copy', (event) => {
    event.target.style.background = "green";
})