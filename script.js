const body = document.getElementsByTagName("body")[0];

if (localStorage.getItem('theme') === 'day') {
    body.setAttribute("mode", "day");
  }

function scrollToSection(section){
    const targetSection = document.getElementById(section);
    targetSection.scrollIntoView({ behavior: "smooth" });
}

function changeModeTo(targetMode) {
    body.setAttribute("mode", targetMode);
    localStorage.setItem('theme', 'day');
}