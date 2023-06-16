// const headerNav = document.querySelector('.header__wrapper ul');
// const toggleMenu = document.querySelector('.toggle__menu');
// toggleMenu.addEventListener('click', ()=>{
//     headerNav.classList.toggle('open');
//     toggleMenu.classList.toggle('open');
// });

// const nav = document.querySelectorAll(".header__wrapper ul li a");
// nav.forEach((baba) => {
//   baba.addEventListener("click", () => {
//     baba.nextElementSibling.classList.toggle("open");
//     baba.classList.toggle("open");
//   });
// });

// const gutter = document.querySelector(".header__nav");
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset >= 300) {
//     gutter.classList.add("top");
//   } else {
//     gutter.classList.remove("top");
//   }
// });


const headerNav = document.querySelector('.header__wrapper ul');
const toggleMenu = document.querySelector('.toggle__menu');
toggleMenu.addEventListener('click', ()=>{
    headerNav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
});

const nav = document.querySelectorAll(".header__wrapper ul li a");
nav.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.classList.toggle("open");
  });
});

const gutter = document.querySelector(".header__wrapper.nav");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 300) {
    gutter.classList.add("top");
  } else {
    gutter.classList.remove("top");
  }
});