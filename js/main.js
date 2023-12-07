// TODO: Add active class to the current nav-link
const navLinkItems = document.querySelectorAll(".nav-link");
console.log(navLinkItems);
navLinkItems.forEach((navLinkEle) => {
    navLinkEle.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove('active');
        navLinkEle.classList.add("active");
    })
});

// TODO: Change theme color 
const changeTheme = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        document.getElementById("myIcon").innerHTML = `<i class="bi bi-sun-fill"></i>`;
        document.getElementById("myLogo").innerHTML = `<img src="./assets/img/white-logo.png" width="45%" />`;
    } else {
        document.getElementById("myIcon").innerHTML = `<i class="bi bi-moon-stars-fill"></i>`;
        document.getElementById("myLogo").innerHTML = `<img src="./assets/img/brown-logo.png" width="45%" />`;
    }
};

// TODO: Initial popovers for contact
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
console.log(popoverTriggerList);
let popoverList = popoverTriggerList.map((popoverTriggerEl) => {
    return new bootstrap.Popover(popoverTriggerEl);
});