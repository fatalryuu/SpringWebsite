let projects = [
    {
        id: 1,
        card: null,
        imgURL: "img/spring-boot.svg",
        title: "Spring Boot",
        text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    },
    {
        id: 2,
        card: null,
        imgURL: "img/spring-framework.svg",
        title: "Spring Framework",
        text: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more."
    },
    {
        id: 3,
        card: null,
        imgURL: "img/spring-data.svg",
        title: "Spring Data",
        text: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."
    },
    {
        id: 4,
        card: null,
        imgURL: "img/spring-cloud.svg",
        title: "Spring Cloud",
        text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices."
    },
    {
        id: 5,
        card: null,
        imgURL: "img/spring-data-flow.svg",
        title: "Spring Cloud Data Flow",
        text: "Provides an orchestration service for composable data microservice applications on modern runtimes."
    },
    {
        id: 6,
        card: null,
        imgURL: "img/spring-security.svg",
        title: "Spring Security",
        text: "Protects your application with comprehensive and extensible authentication and authorization support."
    }
]

const dropdowns = [
    {
        id: 1,
        link: "Why Spring",
        links: [
            "Overview",
            "Microservices",
            "Reactive",
            "Event Driven",
            "Cloud",
            "Web Applications",
            "Serverless",
            "Batch"
        ]
    },
    {
        id: 2,
        link: "Learn",
        links: [
            "Overview",
            "Quickstart",
            "Guides",
            "Blog"
        ]
    },
    {
        id: 3,
        link: "Projects",
        links: [
            "Overview",
            "Spring Boot",
            "Spring Framework",
            "Spring Cloud",
            "Spring Cloud Data Flow",
            "Spring Data",
            "Spring Integration",
            "Spring Batch",
            "Spring Security",
            "View all projects",
            "Development tools",
            "Spring Tools4",
            "Spring Initializr"
        ]
    },
    {
        id: 4,
        link: "Academy",
        links: [
            "Courses",
            "Get Certified"
        ]
    },
    {
        id: 5,
        link: "Support",
        links: [
            "Overview",
            "Security Advisories"
        ]
    },
    {
        id: 6,
        link: "Community",
        links: [
            "Overview",
            "Events",
            "Team"
        ]
    }
]

function loadDropdowns() {
    const list = document.querySelector(".nav__list");

    for (let i = 0; i < dropdowns.length; i++) {
        const dropdown = dropdowns[i];

        const wrapper = document.createElement("div");
        wrapper.classList.add("dropdown");

        const button = document.createElement("button");
        button.classList.add("dropdown__button");
        button.textContent = dropdown.link;

        const linksDiv = document.createElement("div");
        linksDiv.classList.add("dropdown__content");

        const links = dropdown.links.map((l, index) => {
            //for blue link and span in dropdown "Projects"
            if ((dropdown.id === 3 && index === 9) || (dropdown.id === 3 && index === 10)) {
                if (index === 9) {
                    const blueLink = document.createElement("a");
                    blueLink.href = "#";
                    blueLink.id = "blue";
                    blueLink.textContent = l;
                    return blueLink;
                } else {
                    const span = document.createElement("span");
                    span.classList.add("projects__text__tools");
                    span.textContent = l;
                    return span;
                }
            } else { //all other links
                const link = document.createElement("a");
                link.href = "#";
                link.textContent = l;
                return link;
            }
        });

        links.forEach(l => linksDiv.appendChild(l));
        wrapper.appendChild(button);
        wrapper.appendChild(linksDiv);

        list.appendChild(wrapper);
    }
}

const projectTemplate = document.querySelector(".project__template");
const projectsWrapper = document.querySelector(".projects__table");

function loadProjects() {
    projects = projects.map(project => {
        const card = projectTemplate.content.cloneNode(true).children[0];

        const image = card.querySelector(".project__icon");
        const header = card.querySelector(".project__header");
        const description = card.querySelector(".project__description");

        image.src = project.imgURL;
        header.textContent = project.title;
        description.textContent = project.text;

        projectsWrapper.append(card);

        return {...project, card: card};
    });
}

loadDropdowns();
loadProjects();

const buttons = document.querySelectorAll(".dropdown__button");
const divs = document.querySelectorAll(".dropdown__content");
const checkbox = document.querySelector('#burger');

const resizeListener = () => {
    if (window.innerWidth >= 900) {
        if (checkbox.checked) {
            checkbox.checked = false;
            divs.forEach(div => div.style.display = 'none');
        }
    }
}

window.addEventListener('resize', resizeListener);

checkbox.addEventListener('change', () => {
    if (!this.checked) {
        divs.forEach(div => div.style.display = 'none');
        buttons.forEach(button => button.classList.remove("up"));
    }
});

if (window.innerWidth <= 900) {
    buttons.forEach((button, i) => button.addEventListener("click", () => {
        divs.forEach((div, j) => {
            if (i !== j) {
                div.style.display = "none";
                buttons[j].classList.remove("up");
            }
        });

        const computedStyle = window.getComputedStyle(divs[i]);
        const displayValue = computedStyle.getPropertyValue("display");

        if (displayValue === "none") {
            divs[i].style.display = "block";
            button.classList.add("up");
        } else {
            divs[i].style.display = "none";
            button.classList.remove("up");
        }
    }));
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollbar = document.getElementById('scrollbar');
    const isNavbarOverflowing = navbar.scrollHeight > navbar.clientHeight;

    if (isNavbarOverflowing) {
        scrollbar.classList.add('show-scrollbar');
    } else {
        scrollbar.classList.remove('show-scrollbar');
    }
});

const search = document.querySelector("#search");

search.addEventListener("input", (e) => {
    const value = e.target.value;
    console.log(value)
})