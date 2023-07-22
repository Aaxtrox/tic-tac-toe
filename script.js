//create module active
const active = (() => {
    // grab pvp and pvc class and .glass class
    const pvp = document.querySelector('.pvp');
    const pvc = document.querySelector('.pvc');
    const pvp_glass = document.querySelector('.pvp_glass');
    const pvc_glass = document.querySelector('.pvc_glass');


    // on pvc click add active class to pvc and pvp otherwise on pvp click remove active class from pvc and pvp
    pvc.addEventListener('click', () => {
        pvc.classList.add('active');
        pvp.classList.add('active');
        pvp_glass.classList.add('active');
        pvc_glass.classList.add('active');
    });

    pvp.addEventListener('click', () => {
        pvp.classList.remove('active');
        pvc.classList.remove('active');
        pvp_glass.classList.remove('active');
        pvc_glass.classList.remove('active');
    });
})();


//current year for links section
document.getElementById("year").innerHTML = new Date().getFullYear();

// run module active
active;

