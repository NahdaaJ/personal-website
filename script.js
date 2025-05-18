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

document.addEventListener('DOMContentLoaded', function () {
    loadComponent('nav-container', 'section-content/nav.html');
    loadComponent('home-container', 'section-content/home.html');
    loadComponent('experience-section', 'section-content/experience.html');
    loadComponent('projects-container', 'section-content/projects.html');
    loadComponent('contact-container', 'section-content/contact.html');

    // Add new experience here
    setTimeout(() => {
        loadCards('experience-container', [
            'experience/default.html',
        ]);

        loadCards('project-card-container', [
            'projects/default.html',
        ]);       
    }, 200);
});