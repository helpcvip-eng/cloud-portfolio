"use strict";

/* =====================================
   1. PORTFOLIO PROJECT DATA
===================================== */

const projects = [
    {
        title: "Cloud Portfolio Website",
        category: "Cloud",
        description:
            "A personal portfolio website built to showcase my learning journey and technical projects.",
        technologies: ["HTML", "CSS", "JavaScript"],
        status: "In Progress"
    },

    {
        title: "AWS Cloud Storage Project",
        category: "Cloud",
        description:
            "A practical project exploring Amazon S3, cloud storage, and website hosting.",
        technologies: ["AWS S3", "Cloud Computing"],
        status: "In Progress"
    },

    {
        title: "Software Development Project",
        category: "Software",
        description:
            "A planned application focused on solving a practical problem through software.",
        technologies: ["JavaScript", "Web Development"],
        status: "Planned"
    },

    {
        title: "AI Assistant",
        category: "AI",
        description:
            "A planned project exploring how artificial intelligence can help users find information.",
        technologies: ["Artificial Intelligence", "APIs"],
        status: "Planned"
    }
];


/* =====================================
   2. FIND THE PROJECT CONTAINER
===================================== */

const projectContainer =
    document.getElementById("project-container");


/* =====================================
   3. DISPLAY PROJECT CARDS
===================================== */

function displayProjects(projectList) {

    // Clear the previous project cards.
    projectContainer.replaceChildren();

    // Show a message if there are no matching projects.
    if (projectList.length === 0) {
        const message = document.createElement("p");

        message.className = "no-projects";
        message.textContent = "No projects found in this category yet.";

        projectContainer.appendChild(message);
        return;
    }

    // Create a card for every project.
    projectList.forEach(function(project) {

        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const category = document.createElement("span");
        category.className = "project-category";
        category.textContent = project.category;

        const technologies = document.createElement("p");
        technologies.textContent =
            "Technologies: " + project.technologies.join(", ");

        const status = document.createElement("p");
        status.className = "project-status";
        status.textContent = "Status: " + project.status;

        // Place the details inside the card.
        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(technologies);
        card.appendChild(status);

        // Place the finished card on the webpage.
        projectContainer.appendChild(card);
    });
}


/* =====================================
   4. DISPLAY PROJECTS WHEN PAGE OPENS
===================================== */

displayProjects(projects);


/* =====================================
   5. MAKE CATEGORY FILTERS WORK
===================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find the category of the button clicked.
        const selectedCategory = button.dataset.category;

        let filteredProjects;

        // Show every project when All Projects is clicked.
        if (selectedCategory === "All") {

            filteredProjects = projects;

        } else {

            // Otherwise, show only the selected category.
            filteredProjects = projects.filter(function(project) {

                return project.category === selectedCategory;

            });

        }

        // Display the matching projects.
        displayProjects(filteredProjects);

        // Remove the active style from every button.
        filterButtons.forEach(function(otherButton) {

            otherButton.classList.remove("active");

        });

        // Highlight the button the user clicked.
        button.classList.add("active");

    });

});


/* =====================================
   6. AUTOMATICALLY UPDATE THE FOOTER YEAR
===================================== */

const yearElement = document.getElementById("current-year");

yearElement.textContent = new Date().getFullYear();