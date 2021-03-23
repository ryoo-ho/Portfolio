"use strict";

//Make navbar transparent when it is on the top
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
console.log(navbarHeight);

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__bar");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

const contactMe = document.querySelector(".profile__button");
contactMe.addEventListener("click", (event) => {
  scrollIntoView("#section__6-contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
