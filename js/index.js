// Your code goes here

// Change h1 color
const headerH1 = document.querySelector("h1");
headerH1.addEventListener("mouseover", (event) => {
    headerH1.style.color = "red";
});
headerH1.addEventListener("mouseleave", (event) => {
    headerH1.style.color = "green";
});
