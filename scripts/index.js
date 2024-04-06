alert("Progress Report: \n I'm currently working on responsiveness! (^▽^)/ ")

const container = document.querySelector('.container');
const navBar = document.querySelector('nav');
const phoneNav = document.querySelector('#phone-nav')

function tempFunction() {
  alert("You got pranked! (つ≧▽≦)つ")
}


function expandPhoneMenu() {
  const currentPhoneNavState = phoneNav.getAttribute("expanded");

  if (currentPhoneNavState === "true") {
    phoneNav.setAttribute("expanded", "false");
  }
  else if (currentPhoneNavState === "false") {
    phoneNav.setAttribute("expanded", "true");
  }
}

container.addEventListener('wheel', (event) => {

  if(currentState === "false") {
    event.preventDefault();

    const delta = Math.sign(event.deltaY);
    const scrollAmount = 500;

    container.scrollBy({
      top: delta * scrollAmount,
      behavior: "smooth"
    });
  }
  else if (currentState === "true") {

  }

});

container.addEventListener('keydown', (event) => {
  const scrollAmount = 0;

  if (event.key == "ArrowUp") {
    scrollAmount = 500;
  }
  else if (event.key == "ArrowDown") {
    scrollAmount = -500;
  };

  container.scrollBy({
    top: scrollAmount,
    behavior: "smooth"
  });
});

function scrollToSection(sectionName){
  const section = document.getElementById(sectionName);

  if(section) {
    section.scrollIntoView({behavior: "smooth"})
  }
}

function scrollToTop(){
  container.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


container.addEventListener('scroll', function(){
  const homepageSection = document.querySelector('[is-homepage="true"]');
  const isHomepage = homepageSection.getBoundingClientRect().top === 0;


  if (isHomepage) {
    navBar.setAttribute("homepage-nav", "true");
  } else {
    navBar.setAttribute("homepage-nav", "false");
  }
  navBar.removeAttribute("initial-load");
});
