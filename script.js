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

// loaders

const projects = [
    {
        id: 1,
        imgURL: "img/spring-boot.svg",
        title: "Spring Boot",
        text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    },
    {
        id: 2,
        imgURL: "img/spring-framework.svg",
        title: "Spring Framework",
        text: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more."
    },
    {
        id: 3,
        imgURL: "img/spring-data.svg",
        title: "Spring Data",
        text: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."
    },
    {
        id: 4,
        imgURL: "img/spring-cloud.svg",
        title: "Spring Cloud",
        text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices."
    },
    {
        id: 5,
        imgURL: "img/spring-data-flow.svg",
        title: "Spring Cloud Data Flow",
        text: "Provides an orchestration service for composable data microservice applications on modern runtimes."
    },
    {
        id: 6,
        imgURL: "img/spring-security.svg",
        title: "Spring Security",
        text: "Protects your application with comprehensive and extensible authentication and authorization support."
    },
]

const loadProjects = () => {
    const wrapper = document.querySelector(".projects__table");

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        const article = document.createElement("article");

        const link = document.createElement("a");
        link.href = "#";

        const image = document.createElement("img");
        image.src = project.imgURL;
        image.alt = "";
        image.classList.add("project__icon");

        const textDiv = document.createElement("div");
        textDiv.classList.add("project__text");

        const title = document.createElement("h2");
        title.textContent = project.title;

        const text = document.createElement("p");
        text.textContent = project.text;

        textDiv.appendChild(title);
        textDiv.appendChild(text);
        link.appendChild(image);
        link.appendChild(textDiv);
        article.appendChild(link);

        wrapper.appendChild(article);
    }
}

loadProjects();