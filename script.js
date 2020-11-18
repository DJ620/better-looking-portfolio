let empty = document.getElementById("empty");
let portfolio = document.getElementById("portfolio");
let name = document.getElementById("name");
let aboutMe = document.getElementsByClassName("about-me");
let contact = document.getElementById("contact-form");
let aboutLink = document.getElementById("about-me-link");
let portLink = document.getElementById("portfolio-link");
let contactLink = document.getElementById("contact-link");

aboutMe.style.display="none";
portfolio.style.display = "none";
contact.style.display = "none";

aboutLink.addEventListener("click", function() {
    empty.style.display="none";
    aboutMe.style.display = "block";
    contact.style.display = "none";
    aboutLink.style.fontWeight = "bold";
    portfolio.style.display="none";
    portLink.style.fontWeight="normal";
    contactLink.style.fontWeight = "normal";
})

portLink.addEventListener("click", function() {
    empty.style.display="none";
    aboutMe.style.display="none";
    contact.style.display = "none";
    portfolio.style.display="block";
    portLink.style.fontWeight="bold";
    aboutLink.style.fontWeight="normal";
    contactLink.style.fontWeight = "normal";
})

name.addEventListener("click", function() {
    empty.style.display="block";
    aboutMe.style.display="none";
    portfolio.style.display="none";
    contact.style.display = "none";
    aboutLink.style.fontWeight="normal";
    portLink.style.fontWeight="normal";
    contactLink.style.fontWeight = "normal";
})

contactLink.addEventListener("click", function() {
    empty.style.display="none";
    aboutMe.style.display="none";
    portfolio.style.display="none";
    contact.style.display="block";
    aboutLink.style.fontWeight="normal";
    portLink.style.fontWeight="normal";
    contactLink.style.fontWeight="bold";
});