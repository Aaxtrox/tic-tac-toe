//create module active to toggle between menus
const active = (() => {
    const pvp = document.querySelector('.pvp');
    const pvc = document.querySelector('.pvc');
    const pvp_glass = document.querySelector('.pvp_glass');
    const pvc_glass = document.querySelector('.pvc_glass');
    const pvp_menu = document.querySelector('.pvp_menu');
    const pvc_menu = document.querySelector('.pvc_menu');


    // on pvc click add active class
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
    // grab id
    const preloader = document.getElementById('preloader');
    const spinner = document.getElementById('spinner');

    // when body loads add loader class to preloader and spinner
    window.addEventListener('load', loader);

    function loader() {
        preloader.classList.add('loader');
        spinner.classList.add('loader');
    }
})();

// module for toggle button
const toggle = (() => {
    // grab id
    const btn = document.getElementById('btn');
    const btn1 = document.getElementById('btn1');
    const leftClick = document.getElementById('leftClick');
    const rightClick = document.getElementById('rightClick');
    const leftClick1 = document.getElementById('leftClick1');
    const rightClick1 = document.getElementById('rightClick1');

    // add event listener to button
    leftClick.addEventListener('click', () => {
        btn.style.left = '0';
    });

    rightClick.addEventListener('click', () => {
        btn.style.left = '50%';
    });

    leftClick1.addEventListener('click', () => {
        btn1.style.left = '0';
    });

    rightClick1.addEventListener('click', () => {
        btn1.style.left = '50%';
    });
})();

// run module
active;
year;
loading;
toggle;

