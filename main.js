window.addEventListener('scroll', function() {
    let header_wrapper = document.querySelector('.header__wrapper');
    let header_name = document.querySelector('.header__name');
    let header_links = document.querySelectorAll('.header__link');

    if (window.scrollY > 0) {
        header_wrapper.classList.add('scrolled');
        header_name.classList.add('scrolled');

        header_links.forEach(function(header_link) {
            header_link.classList.add('scrolled');
        });
    } 
    else {
        header_wrapper.classList.remove('scrolled');
        header_name.classList.remove('scrolled');
        
        header_links.forEach(function(header_link) {
            header_link.classList.remove('scrolled');
        });
    }
  });

const menuButton = document.querySelector('.header__bars');
const menu = document.querySelector('.mobile-nav');

menuButton.addEventListener('click', function() {
  menu.classList.toggle('show');
});