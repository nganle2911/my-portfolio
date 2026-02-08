const projectsList = [
    {
        img: "itineraires.png",
        name: "Web GIS - GPS Itinerary",
        category: "web",
        desc: "Web GIS application for collecting GPS points, managing itineraries, and visualizing routes with Leaflet via a JSON-based API.",
        techList: ["HTML", "CSS", "JavaScript", "Leaflet", "PHP", "MySQL", "GPS"],
        linkDemo: "http://kimngan2911.atwebpages.com/",
        linkGit: "https://github.com/nganle2911/SAE301_CollecteAutomatisee_ProjetItineraires",
        linkReport: ""
    },
    {
        img: "planIUT.png",
        name: "Interactive IUT Plan",
        category: "web",
        desc: "Interactive Web GIS for campus map exploration using SVG and JavaScript, with spatial metadata.",
        techList: ["HTML", "CSS", "JavaScript", "SVG", "PostgreSQL", "Python"],
        linkDemo: "https://www.youtube.com/watch?v=HCuubya_fgw",
        linkGit: "https://github.com/nganle2911/SAE3_VCOD5_Visualisation_des_donnees_SIG",
        linkReport: ""
    },
    {
        img: "morse.jpg",
        name: "les enquêtes de morse",
        category: "data",
        desc: "Developed an end-to-end PostgreSQL data pipeline, from multi-source data collection, cleaning, CDM modeling, ETL with FME and SQL validation.",
        techList: ["PostgreSQL", "FME", "Python", "BeautifulSoup", "CDM"],
        linkDemo: "",
        linkGit: "",
        linkReport: "https://drive.google.com/drive/folders/1vkvhNtAGNgicw6cyyBeVtizt1R6BnJSI?usp=drive_link"
    },
    {
        img: "covid.png",
        name: "COVID-19 en France",
        category: "data",
        desc: "COVID-19 time series analysis in France with trend decomposition and short-term forecasting.",
        techList: ["Time Series Analysis", "RStudio"],
        linkDemo: "",
        linkGit: "",
        linkReport: "https://drive.google.com/drive/folders/11iQW3Wl1ncj4vR6mkN9cFOjREGiZwSA4?usp=drive_link"
    },
    {
        img: "portfolio-iut.png",
        name: "Personal Website",
        category: "web",
        desc: "Designed and developed a three-page personal website, focusing on layout organization, navigation, and CSS-based styling.",
        techList: ["HTML", "CSS", "JavaScript"],
        linkDemo: "https://mon-portfolio-iut-perpignan.vercel.app/",
        linkGit: "https://github.com/nganle2911/mon-portfolio-IUT-Perpignan",
        linkReport: ""
    },
    {
        img: "car.png",
        name: "ademe - car labelling",
        category: "data",
        desc: "Analyzed factors influencing vehicle sale prices using linear regression on ADEME datasets to identify significant correlations.",
        techList: ["Linear Regression", "RStudio"],
        linkDemo: "",
        linkGit: "",
        linkReport: "https://drive.google.com/drive/folders/1EMcLvsuNtCdWyfZ5oO6Uj-FRs0-xUset"
    },
    {
        img: "project7.png",
        name: "Samar Layout",
        category: "web",
        desc: "Cloned a Samar layout by using HTML, CSS, JavaScript",
        techList: ["HTML5", "CSS3", "JavaScript"],
        linkDemo: "https://samar-project-omega.vercel.app/",
        linkGit: "https://github.com/nganle2911/Samar-Project",
        linkReport: ""
    },
    {
        img: "project1.png",
        name: "Diner Layout",
        category: "web",
        desc: "Cloned a restaurant website featuring multi-page navigation, including Home, About, and Contact sections.",
        techList: ["HTML5", "CSS3", "Bootstrap 5", "SASS", "JavaScript"],
        linkDemo: "https://diner-project.vercel.app/",
        linkGit: "https://github.com/nganle2911/capstone-diner",
        linkReport: ""
    },
    {
        img: "project5.png",
        name: "shopping cart",
        category: "web",
        desc: "A small website including admin & user pages with complete CRUD operations using JavaScript Local Storage.",
        techList: ["HTML5", "CSS3", "Bootstrap 5", "SASS", "Mock API", "JavaScript"],
        linkDemo: "https://capstone-phone-api.vercel.app/",
        linkGit: "https://github.com/nganle2911/capstone-phone-api",
        linkReport: ""
    },
    {
        img: "project3.png",
        name: "shoes shop",
        category: "web",
        desc: "A simple React landing page showcasing shoes listings with detailed product views.",
        techList: ["React", "Bootstrap 5", "SASS", "Axios"],
        linkDemo: "https://reactjs-shoes-shop.vercel.app/",
        linkGit: "https://github.com/nganle2911/reactjs-shoesShop",
        linkReport: ""
    },
    {
        img: "project6.png",
        name: "CYBERFLIX",
        category: "web",
        desc: "A responsive React movie app featuring movie listings, showtime selection, seat booking, and ticket purchasing.",
        techList: ["Tailwind CSS", "SASS", "Ant Design", "React", "Redux"],
        linkDemo: "https://cyberflix.vercel.app/",
        linkGit: "https://github.com/nganle2911/CyberFlix",
        linkReport: ""
    },
    {
        img: "project8.png",
        name: "E-Learning App",
        category: "web",
        desc: "A responsive e-learning web app built with React, featuring course browsing, enrollment, user profiles, and admin CRUD management.",
        techList: ["Tailwind CSS", "SASS", "Ant Design", "React", "Hooks", "Redux"],
        linkDemo: "https://elearning-capstone-seven.vercel.app/",
        linkGit: "https://github.com/nganle2911/elearning-capstone",
        linkReport: ""
    },
    {
        img: "project2.png",
        name: "airbnb api",
        category: "web",
        desc: "Developed a RESTful API inspired by Airbnb, supporting user authentication, room search, booking, and reviews. Integrated JWT-based authentification.",
        techList: ["NestJS", "MySQL", "Prisma ORM", "Swagger", "Docker"],
        linkDemo: "https://www.youtube.com/watch?v=j3GjizkhEyY",
        linkGit: "https://github.com/trinhhoaithanh/capstone-airbnb",
        linkReport: ""
    },
];

// Theme 
// TODO: Change theme color 
const changeTheme = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        document.getElementById("myIcon").innerHTML = `<i class="bi bi-sun-fill"></i>`;
        document.getElementById("myLogo").innerHTML = `<img src="./assets/img/white-logo.svg" width="55%" />`;
        document.getElementById("my-signature").innerHTML = `<img src="./assets/img/name-white.svg" alt="name-home">`;
        document.getElementById("typingEff").style.color = "#FFFBF7";
    } else {
        document.getElementById("myIcon").innerHTML = `<i class="bi bi-moon-stars-fill"></i>`;
        document.getElementById("myLogo").innerHTML = `<img src="./assets/img/brown-logo.svg" width="55%" />`;
        document.getElementById("my-signature").innerHTML = `<img src="./assets/img/name.png" alt="name-home">`;
        document.getElementById("typingEff").style.color = "#704f5b";
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
        let actionButtons = "";
        let cat = "";

        // To render techList 
        item.techList.forEach((tech) => {
            techSkills += `
                <a class="tech__item">${tech}</a>
            `;
        });

        // To render buttons conditionally
        if (item.linkDemo) {
            actionButtons += `<a href=${item.linkDemo} target="_blank" class="btn btnBrown">demo</a>`;
        }

        if (item.linkGit) {
            actionButtons += `<a href=${item.linkGit} target="_blank" class="btn btnBrown">github</a>`;
        }

        if (item.linkReport) {
            actionButtons += `<a href=${item.linkReport} target="_blank" class="btn btnBrown">report</a>`;
        }

        // To render category for project
        if (item.category === "web") {
            cat = "Web Development";
        } else {
            cat = "Data Analysis";
        }

        contentHTML += `
            <div class="projects__item" key=${index}>
                <div class="card">
                    <img src="./assets/img/${item.img}" class="card-img-top" alt="project">
                    <div class="card-body">
                        <p class="text-uppercase mb-0 fs-5 fw-semibold">${item.name}</p>
                        <p class="category ${item.category}">${cat}</p>
                        <p class="card-text">${item.desc}</p>
                        <div class="tech">
                            <div class="tech__content" id="techContent">
                                ${techSkills}
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        ${actionButtons}
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