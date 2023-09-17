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
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
