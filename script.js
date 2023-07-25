//create module active to toggle between menus
const active = (() => {
    // grab pvp and pvc class and .glass class
    const pvp = document.querySelector('.pvp');
    const pvc = document.querySelector('.pvc');
    const pvp_glass = document.querySelector('.pvp_glass');
    const pvc_glass = document.querySelector('.pvc_glass');
    const pvp_menu = document.querySelector('.pvp_menu');
    const pvc_menu = document.querySelector('.pvc_menu');


    // on pvc click add active class to pvc and pvp otherwise on pvp click remove active class from pvc and pvp
    pvc.addEventListener('click', () => {
        pvc.classList.add('active');
        pvp.classList.add('active');
        pvp_glass.classList.add('active');
        pvc_glass.classList.add('active');
        pvp_menu.classList.add('active');
        pvc_menu.classList.add('active');
    });

    pvp.addEventListener('click', () => {
        pvp.classList.remove('active');
        pvc.classList.remove('active');
        pvp_glass.classList.remove('active');
        pvc_glass.classList.remove('active');
        pvp_menu.classList.remove('active');
        pvc_menu.classList.remove('active');
    });
})();

// module to add current year to footer
const year = (() => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
})();

// module to add preloader
const loading = (() => {
    //grab preloader
    const preloader = document.querySelector('.preloader');
    // grab loader
    const loader = document.querySelector('.loader');

    // on body load add class load to preloader and loader
    window.addEventListener('load', () => {
        preloader.classList.add('load');
        loader.classList.add('load');
    });
})();

// run module
active;
year;
loading;
