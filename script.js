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
    localStorage.setItem('theme', targetMode);

    changeModeImages(targetMode);
}

function changeModeImages(targetMode) {
    const dayModeImage = document.getElementById("dayModeImage");
    const nightModeImage = document.getElementById("nightModeImage");

    if (targetMode == "day") {
        dayModeImage.src = "../icons/dm-active.png";
        nightModeImage.src = "../icons/nm-inactive.png";
    }
    else {
        dayModeImage.src = "../icons/dm-inactive.png";
        nightModeImage.src = "../icons/nm-active.png";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let currentMode = body.getAttribute("mode")
    changeModeImages(currentMode);
});