function loadComponent(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => console.error('Error loading component:', error));
}

function loadExperienceCards(containerId, filePaths) {
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

    // Add new experience here
    setTimeout(() => {
        loadExperienceCards('experience-container', [
            'experience/default.html',
        ]);
    }, 200);
});