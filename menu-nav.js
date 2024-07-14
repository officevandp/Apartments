var navLinks = document.querySelector('header nav');
var menubar = document.querySelector('.menu-bar');
var hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () =>{
        if(hamburger.classList.contains('is-active')){
            hamburger.classList.remove('is-active');
            navLinks.classList.remove('show');
            const elements = document.querySelectorAll('div, main');
            elements.forEach(function(element) {
                element.classList.remove('blur');
              });
        }
        else{
            hamburger.classList.add('is-active');
            navLinks.classList.add('show');
            const elements = document.querySelectorAll('div:not(.menu-bar):not(.cf):not(.three.col):not(.hamburger):not(.container-logo), main');

elements.forEach(function(element) {
  element.classList.add('blur');
        });
    }
})
