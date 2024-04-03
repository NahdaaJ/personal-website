const container = document.querySelector('.container');
const navBar = document.querySelector('nav');

container.addEventListener('wheel', (event) => {
  event.preventDefault();

  const delta = Math.sign(event.deltaY);
  const scrollAmount = 500;

  container.scrollBy({
    top: delta * scrollAmount,
    behavior: "smooth"
  });
});

container.addEventListener('scroll', function(){
  const homepageSection = document.querySelector('[is-homepage="true"]');
  const isHomepage = homepageSection.getBoundingClientRect().top === 0;

  if (isHomepage) {
    navBar.setAttribute("homepage-nav", "true");
  } else {
    navBar.setAttribute("homepage-nav", "false");
  }
});
