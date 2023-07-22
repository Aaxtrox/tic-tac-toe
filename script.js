//create module active
const active = (() => {
    // grab pvp and pvc class and .glass class
    const pvp = document.querySelector('.pvp');
    const pvc = document.querySelector('.pvc');
    const glass = document.querySelector('.glass');


    // on pvc click add active class to pvc and pvp otherwise on pvp click remove active class from pvc and pvp
    pvc.addEventListener('click', () => {
        pvc.classList.add('active');
        pvp.classList.add('active');
        glass.classList.add('active');
    });

    pvp.addEventListener('click', () => {
        pvp.classList.remove('active');
        pvc.classList.remove('active');
        glass.classList.remove('active');
    });
})();


//current year for links section
document.getElementById("year").innerHTML = new Date().getFullYear();

// run module active
active;

