function loadComponent(containerId, filePath) {
  fetch(filePath)
      .then(response => response.text())
      .then(html => {
          document.getElementById(containerId).innerHTML = html;
      })
      .catch(error => console.error('Error loading component:', error));
}

document.addEventListener('DOMContentLoaded', function () {
  loadComponent('nav-container', 'section-content/nav.html');
  loadComponent('home-container', 'section-content/home.html');
});                