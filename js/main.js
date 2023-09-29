/* бургер меню*/ 

let menuBtn = document.querySelector('.burger__menu-btn');
let menu = document.querySelector('burger__menu-list');
menuBtn.addEventListener('click', function(){
  menu.classList.toggle('--active');
})
/* /бургер меню*/ 