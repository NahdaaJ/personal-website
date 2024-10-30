function scrollToSection(section){
    const targetSection = document.getElementById(section);
    targetSection.scrollIntoView({ behavior: "smooth" });
}

function changeModeTo(targetMode) {
    const body = document.getElementsByTagName("body")[0];
  
      body.setAttribute("mode", targetMode);
  }