# Web Portfolio Project ♡
<div align="centre">
  <a href="https://nahdaajawed.com">
    <img src="https://img.shields.io/badge/Nahdaa%20Jawed%20Portfolio-Visit-C08585?style=for-the-badge" alt="Visit Badge"/>
  </a>
</div>

</div>

**Hey there! ♡** Welcome to my personal portfolio repo. I'm a junior software engineer practicing different disciplines of software engineering! This project is my playground where I experiment, learn, and showcase my skills!


## What's Inside?
- [`index.html`](index.html): The main HTML entry point for the website.
- [`script.js`](script.js): Main JavaScript file for dynamic loading and interactivity.
- [`assets/`](assets/): Images, icons, and custom cursors used throughout the site.
- [`src/components/`](src/components/): Reusable UI components.
  - [`src/components/nav/`](src/components/nav/): Navigation bar HTML, CSS, and JS.
  - [`src/components/footer/`](src/components/footer/): Footer bar HTML, CSS, and JS.
- [`src/sections/`](src/sections/): Main content sections of the site.
  - [`src/sections/home/`](src/sections/home/): Homepage section.
  - [`src/sections/experience/`](src/sections/experience/): Experience section and cards.
    - [`src/sections/experience/cards/`](src/sections/experience/cards/): Individual experience cards.
    - [`src/sections/experience/images/`](src/sections/experience/images/): Images for experience cards.
  - [`src/sections/projects/`](src/sections/projects/): Projects section and cards.
    - [`src/sections/projects/cards/`](src/sections/projects/cards/): Individual project cards.
    - [`src/sections/projects/images/`](src/sections/projects/images/): Images for project cards.
  - [`src/sections/contact/`](src/sections/contact/): Contact section and form.
- [`styles/`](styles/): Global and shared CSS files.
  - [`styles/base.css`](styles/base.css): Base styles for the site.
  - [`styles/variables.css`](styles/variables.css): CSS variables for colors, fonts, and cursors.
  - [`styles/main.css`](styles/main.css): Main stylesheet that imports all others.
- [`legacy/`](legacy/): Previous versions and experiments.

## Adding Cards

### Experience Cards
1. Duplicate the default card at [`src/sections/experience/cards`](src/sections/experience/cards/), and make the following changes:
    - Change link and `aria-label` on line 1,
    - Change date on line 3,
    - Change job title/company on line 5,
    - Add job description on line 6,
    - Change/Add/Remove skills on line 13+ and change aria label of all skills on line 12.
2. In [`script.js`](script.js) add the path to your new experience card on line 83. <strong>Order matters.</strong>

### Project Cards
1. Duplicate the default card at [`src/sections/projects/cards`](src/sections/projects/cards/), and make the following changes:
    - Change link on line 1,
    - Change image source and alt text on line 3,
    - Change project title and aria label on line 5,
    - Add project description on line 6,
    - Change/Add/Remove skills on line 10+ and change aria label of all skills on line 9.
2. In [`script.js`](script.js) add the path to your new experience card on line 88. <strong>Order matters.</strong>

## Get in Touch!

If you have come across this repo, I'd love to hear from you! Whether you have feedback, suggestions, or just want to say hi, don't hesitate to reach out! ♡
<div align=center>
    <a href="https://www.linkedin.com/in/nahdaa-jawed/" target="_blank">
        <img src="/assets/icons/linkedin.png" alt="LinkedIn" style="height:50px" >
    </a>
    <a href="https://github.com/NahdaaJ" target="_blank">
        <img src="/assets/icons/github.png" alt="GitHub" style="height:50px" >
    </a>
    <a href="mailto:nahdaajawed@gmail.com?subject=%F0%9F%90%B0%20Reaching%20Out%20From%20Your%20Portfolio&body=Just%20hopping%20by%20to%20say%20hi%20and%20get%20in%20touch!">
        <img src="/assets/icons/email.png" alt="Email" style="height:50px" >
    </a>
</div>


