const container = document.querySelector('.container');
const navBar = document.querySelector('nav');
const phoneNav = document.querySelector('#phone-nav');
let  phoneNavComputedStyle = window.getComputedStyle(phoneNav);
let navComputedStyle = window.getComputedStyle(navBar);

// ON LOAD +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function loadComponent(containerId, filePath) {
  fetch(filePath)
      .then(response => response.text())
      .then(html => {
          document.getElementById(containerId).innerHTML = html;
      })
      .catch(error => console.error('Error loading component:', error));
}

document.addEventListener('DOMContentLoaded', function () {
  loadComponent('desktop-nav', 'content/nav.html');
  loadComponent('section-homepage', 'content/homepage.html');
  // loadComponent('section-about-me', 'content/about-me.html');
  // loadComponent('section-experience', 'content/experience.html');
  // loadComponent('section-projects', 'content/projects.html');
  // loadComponent('section-contact', 'content/contact.html');
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// FUNCTIONS ------------------------------------------------------------------------------
function tempFunction() {
  alert("You got pranked! (つ≧▽≦)つ")
}

// function customScroll(event) {
//   const currentPhoneNavState = phoneNav.getAttribute("expanded");
//   event.preventDefault();

//   if (currentPhoneNavState !== "true") {
//     const delta = Math.sign(event.deltaY);
//     const scrollAmount = 500;

//     container.scrollBy({
//       top: delta * scrollAmount,
//       behavior: "smooth"
//     });
//   }
// }

// function expandPhoneMenu() {
//   const currentPhoneNavState = phoneNav.getAttribute("expanded");

//   if (currentPhoneNavState === "true") {
//     phoneNav.setAttribute("expanded", "false");
//   }
//   else if (currentPhoneNavState === "false") {
//     phoneNav.setAttribute("expanded", "true");
//   }
// }



function scrollToSection(sectionName){
  const section = document.getElementById(sectionName);
  const currentPhoneNavState = phoneNav.getAttribute("expanded");

  if (currentPhoneNavState === "true"){
    phoneNav.setAttribute("expanded", "false");
  }

  if(section) {
    section.scrollIntoView({behavior: "smooth"})
  }
}

// EVENT LISTENER ------------------------------------------------------------------------------

// container.addEventListener('wheel', (event) => {
//   const currentPhoneNavState = phoneNav.getAttribute("expanded");
//   event.preventDefault();

//   if (currentPhoneNavState !== "true") {
//         const delta = Math.sign(event.deltaY);
//     const scrollAmount = 500;

//     container.scrollBy({
//       top: delta * scrollAmount,
//       behavior: "smooth"
//     });
//   }
// });


// if (phoneNavComputedStyle.getPropertyValue('display') === 'none'){
//   // container.addEventListener('wheel', customScroll);
//   container.setAttribute("phoneScreen", "false");
// }
// else if (navComputedStyle.getPropertyValue('display') === 'none'){
//   // container.removeEventListener('wheel', customScroll);
//   container.setAttribute("phoneScreen", "true");
// }


// container.addEventListener('keydown', (event) => {
//   const scrollAmount = 0;

//   if (event.key == "ArrowUp") {
//     scrollAmount = 500;
//   }
//   else if (event.key == "ArrowDown") {
//     scrollAmount = -500;
//   };

//   container.scrollBy({
//     top: scrollAmount,
//     behavior: "smooth"
//   });
// });

// container.addEventListener('scroll', function(){
//   const homepageSection = document.querySelector('[is-homepage="true"]');
//   const isHomepage = homepageSection.getBoundingClientRect().top === 0;

//   if (isHomepage) {
//     navBar.setAttribute("homepage-nav", "true");
//   } else {
//     navBar.setAttribute("homepage-nav", "false");
//   }
//   navBar.removeAttribute("initial-load");
// });

