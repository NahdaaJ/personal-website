function loadComponent(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => console.error('Error loading component:', error));
}

function loadCards(containerId, filePaths) {
    const container = document.getElementById(containerId);
    Promise.all(filePaths.map(path => fetch(path).then(res => res.text())))
        .then(cards => {
            container.innerHTML = cards.join('');
        })
        .catch(error => console.error('Error loading experience cards:', error));
}

function scrollToSection(section) {
    const targetSection = document.getElementById(section);
    const y = targetSection.getBoundingClientRect().top + window.pageYOffset - 115;
    window.scrollTo({ top: y, behavior: "smooth" });
}

function observeSection() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const navLinkId = sectionId.replace('-section', '-link');
                navLinks.forEach(link => link.classList.remove("active"));
                const navLink = document.getElementById(navLinkId);
                if (navLink) navLink.classList.add("active");
            }
        });
    }, {
        threshold: 0.7
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadComponent('nav-container', 'section-content/nav.html');
    loadComponent('home-container', 'section-content/home.html');
    loadComponent('experience-container', 'section-content/experience.html');
    loadComponent('projects-container', 'section-content/projects.html');
    loadComponent('contact-container', 'section-content/contact.html');

    // Add new experience here
    setTimeout(() => {
        loadCards('experience-card-container', [
            'experience/default.html',
        ]);

        loadCards('project-card-container', [
            'projects/default.html',
        ]);       

        // Temp
        observeSection();
        
    }, 200);
});