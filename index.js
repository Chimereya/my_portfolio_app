'use strict';

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


/*navbar toggle*/

const navbar = document.querySelector("[data-nav]");
const navbarLinks = document.querySelectorAll("[data-link]");
const navToggler = document.querySelector("[data-nav-toggler]");


const toggleNavbar = function () {
  navbar.classList.toggle("open");
  navToggler.classList.toggle("active");
  nav.style.maxHeight = nav.scrollHeight + "px"

}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("open");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);


/*active links*/


let containers = document.querySelectorAll('section');
let navigation = document.querySelectorAll('header, .nav-menu, a');

window.onscroll = () => {
  containers.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navigation.forEach((link) => {
        link.classList.remove('active');
        document.querySelector('header .nav-menu a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};




/*theme*/
/*dark mode*/
 const toggle = document.getElementById('theme-toggle');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const body = document.body;

  // Load and apply the saved theme from localStorage
  const currentTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', currentTheme);
  toggleSVG(currentTheme);

  toggle.addEventListener('click', () => {
    const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleSVG(newTheme);
  });

  function toggleSVG(theme) {
    if (theme === 'dark') {
      sun.style.display = 'block';
      moon.style.display = 'none';
    } else {
      sun.style.display = 'none';
      moon.style.display = 'block';
    }
  }
