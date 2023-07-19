//create module active
const active = (() => {
    // grab pvp and pvc class
    const pvp = document.querySelector('.pvp');
    const pvc = document.querySelector('.pvc');

    // on pvc click add active class to pvc and pvp otherwise on pvp click remove active class from pvc and pvp
    pvc.addEventListener('click', () => {
        pvc.classList.add('active');
        pvp.classList.add('active');
    });

    pvp.addEventListener('click', () => {
        pvp.classList.remove('active');
        pvc.classList.remove('active');
    });
})();

// run module active
active;

