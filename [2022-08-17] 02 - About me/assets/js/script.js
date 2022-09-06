const headerHeight = document.querySelector('#header-bar').offsetHeight;
let main_content = document.querySelector('main');
let header_content = document.querySelector('#header-content');
let sidebar_menu_toggler = document.querySelector('#sidebar-toggler');
let scroll_to_top = document.querySelector('.scroll-to-top');

document.documentElement.style.setProperty('--scroll-padding', headerHeight + 51 + "px");

let screen_width = window.innerWidth;

window.addEventListener('resize', () => {
    screen_width = window.innerWidth;
    document.offsetHeight;
});

sidebar_menu_toggler.addEventListener('click', () => {
    if (screen_width < 992) {
        document.querySelector('nav').classList.toggle('mobile-sidebar-active');

        main_content.addEventListener('click', () => {
            document.querySelector('nav').classList.remove('mobile-sidebar-active');
        });

        header_content.addEventListener('click', () => {
            document.querySelector('nav').classList.remove('mobile-sidebar-active');
        });
    } else if (screen_width >= 992) {
        document.querySelector('nav').classList.toggle('sidebar-inactive');
        document.querySelector('main').classList.toggle('sidebar-reset-margin');
        document.querySelector('footer').classList.toggle('sidebar-reset-margin');
    }    
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        setTimeout(scroll_to_top.classList.remove('scroll-to-top-anim-reverse'), 1500);        
        scroll_to_top.classList.add('scroll-to-top-anim');
    } else {                
        if(scroll_to_top.classList.contains("scroll-to-top-anim")){
            scroll_to_top.classList.add('scroll-to-top-anim-reverse');
            setTimeout(scroll_to_top.classList.remove('scroll-to-top-anim'), 1500);                        
        }        
    }
}

scroll_to_top.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

