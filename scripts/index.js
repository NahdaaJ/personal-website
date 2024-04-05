const container = document.querySelector('.container');
const navBar = document.querySelector('nav');

let startY; // Variable to store initial touch position

container.addEventListener('touchstart', (event) => {
  // Store the initial Y position of the touch
  startY = event.touches[0].clientY;
  // container.style.scrollSnapType = "none";
});

// container.addEventListener('touchmove', (event) => {
//     const delta = Math.sign(event.touches[0].clientY - startY);

//     container.scrollBy({
//       top: -delta * 1000,
//       behavior: "smooth"
//     });

//     event.preventDefault();
//     container.style.scrollSnapType = "y mandatory";
// } );

container.addEventListener('touchmove', (event) => {
  const delta = event.touches[0].clientY - startY;

  // Scroll the content by the calculated amount
  container.scrollBy({
    top: -delta,
    behavior: "smooth"
  });

  // Prevent default touch behavior (e.g., scrolling the entire page)
  e.preventDefault();
});

function tempFunction() {
  alert("You got pranked! (つ≧▽≦)つ")
}

container.addEventListener('wheel', (event) => {
  event.preventDefault();

  const delta = Math.sign(event.deltaY);
  const scrollAmount = 1000;

  container.scrollBy({
    top: delta * scrollAmount,
    behavior: "smooth"
  });
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
