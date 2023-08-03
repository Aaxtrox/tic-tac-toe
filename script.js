// Module for toggling between menus
const menuToggle = (() => {
    // DOM elements
    const pvp = document.querySelector('.pvp');
    const pvc = document.querySelector('.pvc');
    const player = document.querySelector('.player');
    const computer = document.querySelector('.computer');
    const menuPvp = document.querySelector('.menu-pvp');
    const menuPvc = document.querySelector('.menu-pvc');

    // Toggle functionality on clicking pvc and pvp
    pvc.addEventListener('click', () => {
        // Add 'active' class to elements
        pvc.classList.add('active');
        pvp.classList.add('active');
        player.classList.add('active');
        computer.classList.add('active');
        menuPvp.classList.add('active');
        menuPvc.classList.add('active');
    });

    pvp.addEventListener('click', () => {
        // Remove 'active' class from elements
        pvp.classList.remove('active');
        pvc.classList.remove('active');
        player.classList.remove('active');
        computer.classList.remove('active');
        menuPvp.classList.remove('active');
        menuPvc.classList.remove('active');
    });
})();

// Module to add current year to footer
const addCurrentYear = (() => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
})();

// Module to handle preloader
const preloader = (() => {
    // Grab preloader and spinner elements
    const preloader = document.getElementById('preloader');
    const spinner = document.getElementById('spinner');

    // Add 'loader' class to preloader and spinner after window load
    window.addEventListener('load', () => {
        preloader.classList.add('loader');
        spinner.classList.add('loader');
    });
})();

// Module for toggle button
const toggleButton = (() => {
    // DOM elements
    const btn = document.getElementById('btn');
    const btn1 = document.getElementById('btn1');
    const leftClick = document.getElementById('leftClick');
    const rightClick = document.getElementById('rightClick');
    const leftClick1 = document.getElementById('leftClick1');
    const rightClick1 = document.getElementById('rightClick1');

    // Add click event listeners to buttons
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

// Module to handle query
const handleQuery = (() => {
    // DOM elements
    const logoImg = document.querySelector('.logo-img');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');

    // Run on window resize
    window.addEventListener('resize', () => {
        if (logoImg.clientHeight > nav.clientHeight) {
            // Update nav and footer heights based on logo_img height
            nav.style.height = 'fit-content';
            const navHeight = nav.clientHeight;
            footer.style.height = `${navHeight}px`;
        }
    });

    // Run on window load
    window.addEventListener('load', () => {
        if (logoImg.clientHeight > nav.clientHeight) {
            // Update nav and footer heights based on logo_img height
            nav.style.height = 'fit-content';
            const navHeight = nav.clientHeight;
            footer.style.height = `${navHeight}px`;
        }
    });
})();

// Module to resize both menus
const resizeMenus = (() => {
    // DOM elements
    const menu_pvp = document.querySelector('.menu-pvp');
    const menu_pvc = document.querySelector('.menu-pvc');
    const card = document.getElementById('card');
    const vs_divider = document.querySelector('.vd-divider');

    // Run on window resize
    window.addEventListener('resize', () => {
        if (card.clientHeight > menu_pvp.clientHeight || card.clientHeight > menu_pvc.clientHeight) {
            // Calculate new heights and update menu positions
            const cardHeight = card.clientHeight + 5;
            menu_pvp.style.height = `${cardHeight}px`;
            menu_pvp.style.top = `calc(50% - ${cardHeight / 2}px)`;
            menu_pvc.style.height = `${cardHeight}px`;
            menu_pvc.style.top = `calc(50% - ${cardHeight / 2}px)`;
        }
    });

    // Run on window load
    window.addEventListener('load', () => {
        if (card.clientHeight > menu_pvp.clientHeight || card.clientHeight > menu_pvc.clientHeight) {
            // Calculate new heights and update menu positions
            const cardHeight = card.clientHeight + 5;
            menu_pvp.style.height = `${cardHeight}px`;
            menu_pvp.style.top = `calc(50% - ${cardHeight / 2}px)`;
            menu_pvc.style.height = `${cardHeight}px`;
            menu_pvc.style.top = `calc(50% - ${cardHeight / 2}px)`;
        }
    });
})();

// Run all modules
menuToggle;
addCurrentYear;
preloader;
toggleButton;
handleQuery;
resizeMenus;
