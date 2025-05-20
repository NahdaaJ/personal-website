function loadComponent(containerId, filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => console.error('Error loading component:', error));
}

function loadCards(containerId, filePaths) {
    const container = document.getElementById(containerId);
    return Promise.all(filePaths.map(path => fetch(path).then(res => res.text())))
        .then(cards => {
            container.innerHTML = cards.join('');
        })
        .catch(error => console.error('Error loading cards:', error));
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
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

function setContactJs(){
    document.getElementById('contact-form-content').addEventListener('submit', function(event) {
    event.preventDefault();
    const submitButton = document.getElementById('submit-button');
    submitButton.innerHTML = "sending";

    emailjs.send("service_8iaen8k", "template_hdidd1g", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        time: new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })
    })
    .then(function(response) {
        submitButton.innerHTML = "sent! ❤";
        document.getElementById('contact-form-content').reset();
        setTimeout(() => {
            submitButton.innerHTML = "submit";
        }, 3000);
    }, function(error) {
        alert("Failed to send message. Please try again.");
        console.error(error);
    });
});
}

document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
        loadComponent('nav-container', 'src/components/nav/nav.html'),
        loadComponent('home-container', 'src/sections/home/home.html'),
        loadComponent('experience-container', 'src/sections/experience/experience.html'),
        loadComponent('projects-container', 'src/sections/projects/projects.html'),
        loadComponent('contact-container', 'src/sections/contact/contact.html'),
        loadComponent('footer', 'src/components/footer/footer.html')
    ]).then(() => {
        return Promise.all([
            loadCards('experience-card-container', [
                'src/sections/experience/cards/lexisnexis.html',
                'src/sections/experience/cards/python-kickstarter.html',
                'src/sections/experience/cards/university.html',
            ]),
            loadCards('project-card-container', [
                'src/sections/projects/cards/stardewApi.html',
                'src/sections/projects/cards/pomodoro-timer.html',
            ])
        ]);
    }).then(() => {
        observeSection();
        setContactJs();
        setTimeout(() => {
            document.getElementById('loading-overlay').classList.add('hidden');
            setTimeout(() => {
                document.getElementById('loading-overlay').style.display = 'none';
            }, 500);
        }, 3000);
        });
});