// TODO: Get html element by id and by class name
let getElById = (id) => document.getElementById(id); 
let getEleByClass = (className) => document.getElementsByClassName(className);

// TODO: Add active class to the current nav-link
const navLinkItems = document.querySelectorAll(".nav-link");
console.log(navLinkItems);
navLinkItems.forEach((navLinkEle) => {
    navLinkEle.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove('active');
        navLinkEle.classList.add("active");
    })
})
