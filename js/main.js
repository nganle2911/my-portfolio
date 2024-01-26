const projectsList = [
    {
        img: "project1.png",
        name: "Diner Layout",
        desc: "Created a restaurant website to display services and products through different pages, such as 'Home, About, Contact, etc.'",
        techList: ["HTML5", "CSS3", "Bootstrap 5", "SASS"],
        linkDemo: "https://diner-project.vercel.app/",
        linkGit: "https://github.com/nganle2911/capstone-diner"
    },
    {
        img: "project2.png",
        name: "airbnb api",
        desc: "Built a RESTful API for the Airbnb app - allowing users to register or login, search, book, and review rooms. Integrated JWT-based authentication.",
        techList: ["NestJS", "MySQL", "Prisma ORM", "Swagger", "Docker"],
        linkDemo: "http://157.230.120.229:8080/swagger#/",
        linkGit: "https://github.com/trinhhoaithanh/capstone-airbnb"
    },
    {
        img: "project3.png",
        name: "shoes shop",
        desc: "Created a simple web app using React to render different types of shoes. This app allows users to see a list of shoes and their detail pages.",
        techList: ["React", "Bootstrap 5", "SASS", "Axios"],
        linkDemo: "https://reactjs-shoes-shop.vercel.app/",
        linkGit: "https://github.com/nganle2911/reactjs-shoesShop"
    },
    {
        img: "project4.png",
        name: "my portfolio",
        desc: "Created my own personal website, fully responsive for all devices.",
        techList: ["HTML5", "CSS3", "Bootstrap 5", "SASS"],
        linkDemo: "https://portfolio-nganle2911.vercel.app/",
        linkGit: "https://github.com/nganle2911/my-portfolio"
    },
    {
        img: "project5.png",
        name: "phones store",
        desc: "A small website including admin & user pages with complete CRUD operations using JavaScript Local Storage.",
        techList: ["HTML5", "CSS3", "Bootstrap 5", "SASS", "API"],
        linkDemo: "https://capstone-phone-api.vercel.app/",
        linkGit: "https://github.com/nganle2911/capstone-phone-api"
    },
];

// Theme 
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

// Navbar 
// TODO: Add active class to the current nav-link
const navLinkItems = document.querySelectorAll(".nav-link");

navLinkItems.forEach((navLinkEle) => {
    navLinkEle.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove('active');
        navLinkEle.classList.add("active");
    })
});

// Projects 
// TODO: Render project items 
const renderProjectsList = () => {
    let contentHTML = "";

    projectsList.map((item, index) => {
        let techSkills = "";

        // to render techList 
        item.techList.forEach((tech) => {
            techSkills += `
                <a class="tech__item">${tech}</a>
            `;
        });

        contentHTML += `
            <div class="projects__item" key=${index}>
                <div class="card">
                    <img src="./assets/img/${item.img}" class="card-img-top" alt="project">
                    <div class="card-body">
                        <p class="text-uppercase mb-0 fs-5 fw-semibold">${item.name}</p>
                        <p class="card-text">${item.desc}</p>
                        <div class="tech">
                            <div class="tech__content" id="techContent">
                                ${techSkills}
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a href=${item.linkDemo} target="_blank" class="btn btnBrown">demo</a>
                        <a href=${item.linkGit} target="_blank" class="btn btnBrown">github</a>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("projectsContent").innerHTML = contentHTML;
}
renderProjectsList();

// TODO: Animation when scrolling for projects 
document.addEventListener("DOMContentLoaded", () => {
    let projectsContent = document.getElementById("projectsContent");
    let projectItemsList = document.querySelectorAll(".projects__item");
    
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;

        projectItemsList.forEach((item) => {
            let itemOffsetTop = item.offsetTop; 

            if (scrollPosition >= itemOffsetTop - window.innerHeight / 2) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        })
    });
});

// Footer
// TODO: Initial tooltips for contact icons
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// TODO: Click to copy the content on html element - clipboard
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

// TODO: Button back to top 
let myButton = document.getElementById("myBtn");
window.onscroll = () => {scrollFunc()};

// when user scrolls down 50px => show button 
let scrollFunc = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// when user clicks on button => scroll to the top of the page 
let topFunc = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}