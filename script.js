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

// module query
const query = (() => {
    // if logo_img height is bigger than nav height height
    const logo_img = document.querySelector('.logo_img');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');

    // run every time window is resized
    window.addEventListener('resize', () => {
        if (logo_img.clientHeight > nav.clientHeight) {
            nav.style.height = 'fit-content';
            // save nav height to variable
            const navHeight = nav.clientHeight;
            // add nav height to footer
            footer.style.height = `${navHeight}px`;
        }
    });
    // if windows been loaded
    window.addEventListener('load', () => {
        if (logo_img.clientHeight > nav.clientHeight) {
            nav.style.height = 'fit-content';
            // save nav height to variable
            const navHeight = nav.clientHeight;
            // add nav height to footer
            footer.style.height = `${navHeight}px`;
        }
    });
})();

// module to resize both menus
const resize = (() => {
    // grab id pvp_menu and pvc_menu.active
    const pvp_menu = document.querySelector('.pvp_menu');
    const pvc_menu = document.querySelector('.pvc_menu');
    const first = document.getElementById('first');
    const mid = document.getElementById('mid');

    // run every time window is resized
    window.addEventListener('resize', () => {
        // if first height is bigger than pvp_menu height or pvc_menu height
        if (first.clientHeight > pvp_menu.clientHeight || first.clientHeight > pvc_menu.clientHeight) {
            // save first height to variable and add 10px
            const firstHeight = first.clientHeight + 5;
            // add first height to pvp_menu and pvc_menu
            pvp_menu.style.height = `${firstHeight}px`;
            pvc_menu.style.height = `${firstHeight}px`;
            // change top of pvp_menu and pvc_menu to place them in the middle
            pvp_menu.style.top = `calc(50% - ${firstHeight / 2}px)`;
            pvc_menu.style.top = `calc(50% - ${firstHeight / 2}px)`;
        }
    });

    // if windows been loaded
    window.addEventListener('load', () => {
        // if first height is bigger than pvp_menu height or pvc_menu height
        if (first.clientHeight > pvp_menu.clientHeight || first.clientHeight > pvc_menu.clientHeight) {
            // save first height to variable and add 10px
            const firstHeight = first.clientHeight + 5;
            // add first height to pvp_menu and pvc_menu
            pvp_menu.style.height = `${firstHeight}px`;
            pvc_menu.style.height = `${firstHeight}px`;
            // change top of pvp_menu and pvc_menu to place them in the middle
            pvp_menu.style.top = `calc(50% - ${firstHeight / 2}px)`;
            pvc_menu.style.top = `calc(50% - ${firstHeight / 2}px)`;
        }
    });
})();
// run module
active;
year;
loading;
toggle;
query;
resize;