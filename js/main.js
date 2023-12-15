// TODO: Add active class to the current nav-link
const navLinkItems = document.querySelectorAll(".nav-link");

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

// TODO: Initial tooltips for contact icons
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// TODO: Click to copy the content on html element 
const copyMyContent = (name) => {
    let getEleList = document.querySelectorAll("#myEmail, #myPhone");

    getEleList.forEach((ele) => {
        if (ele.name === name) {
            navigator.clipboard.writeText(ele.value).then(() => {
                alert(`${ele.name} copied: ${ele.value}`);
            }).catch((err) => {
                console.error("Failed to copy: " + err);
            });
        }
    });
};