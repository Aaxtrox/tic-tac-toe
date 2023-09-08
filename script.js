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

// Module for switch button Player or Computer
const toggleButton = (() => {
    // DOM elements
    const btn = document.getElementById('btn');
    const btn1 = document.getElementById('btn1');
    const leftClick = document.getElementById('leftClick');
    const rightClick = document.getElementById('rightClick');
    const leftClick1 = document.getElementById('leftClick1');
    const rightClick1 = document.getElementById('rightClick1');

    // Update button positions based on click events

    // When leftClick is clicked, align btn to the left and btn1 to the right
    leftClick.addEventListener('click', () => {
        btn.style.left = '0';
        btn1.style.left = '50%';
    });

    // When rightClick is clicked, shift btn to the right and bring btn1 to the left
    rightClick.addEventListener('click', () => {
        btn.style.left = '50%';
        btn.classList.add('active');
        btn1.style.left = '0';
    });

    // When leftClick1 is clicked, reposition btn to the right and adjust btn1 to the left
    leftClick1.addEventListener('click', () => {
        btn.style.left = '50%';
        btn.classList.add('active');
        btn1.style.left = '0';
    });

    // When rightClick1 is clicked, slide btn to the left and position btn1 to the right
    rightClick1.addEventListener('click', () => {
        btn.style.left = '0';
        btn1.style.left = '50%';
    });
})();

// Module to initialize dropdown
const initializeDropdown = (() => {
    // Get all dropdown elements with the class 'dropdown'
    const dropdowns = document.querySelectorAll('.dropdown');

    // Loop through each dropdown element
    dropdowns.forEach(dropdown => {
    // Get elements inside the current dropdown
    const select = dropdown.querySelector('.select'); // Select area
    const caret = dropdown.querySelector('.caret');   // Caret icon
    const menu = dropdown.querySelector('.menu');     // Dropdown menu
    const options = dropdown.querySelectorAll('.menu li'); // Individual menu options
    const selected = dropdown.querySelector('.selected'); // Selected option display
    
    // Toggle dropdown visibility on select click
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    
    // Handle option selection in the dropdown menu
    options.forEach(option => {
        option.addEventListener('click', () => {
        // Update the selected option display
        selected.innerText = option.innerText;
        
        // Reset dropdown appearance and visibility
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        
        // Clear 'active' class from all options and set it for the selected option
        options.forEach(option => {
            option.classList.remove('active');
        });
        option.classList.add('active');
        });
    });
    });
})();

// Module to add current year to footer
const addCurrentYear = (() => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
})();

// Module to handle query for navbar and footer
const handleQuery = (() => {
    // DOM elements
    const logoImg = document.querySelector('.logo');
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

// Module to resize dropdown to match start button width
const ResponsiveDropdownSizer = (() => {
    // DOM elements
    const dropdown = document.querySelector('.dropdown');
    const btn_wrapper = document.querySelector('.btn-wrapper');

    // Run on window resize
    window.addEventListener('resize', () => {
        // Update dropdown width based on btn-wrapper width
        dropdown.style.width = `${btn_wrapper.clientWidth}px`;
    });

    // Run on window load
    window.addEventListener('load', () => {
        // Update dropdown width based on btn-wrapper width
        dropdown.style.width = `${btn_wrapper.clientWidth}px`;
    });
})();

// Module to resize both menus with start button
const resizeMenus = (() => {
    // DOM elements
    const menu_pvp = document.querySelector('.menu-pvp');
    const menu_pvc = document.querySelector('.menu-pvc');
    const card = document.getElementById('card');

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

// Game Board Module
const showBoard = (() => {
    // DOM elements
    const main = document.querySelector('main');
    const btn_wrapper_pvp = document.querySelector('.btn-wrapper-pvp');
    const btn_wrapper_pvc = document.querySelector('.btn-wrapper-pvc');
    const board = document.querySelector('.board');

    // Event listeners to show the board when buttons are clicked
    btn_wrapper_pvp.addEventListener('click', () => {
        main.style.display = 'none';
        board.style.display = 'block';
    });

    btn_wrapper_pvc.addEventListener('click', () => {
        main.style.display = 'none';
        board.style.display = 'block';
    });
})();

// Prevent refresh when board has display block
const preventRefresh = (() => {
    // DOM elements
    const board = document.querySelector('.board');

    // Prevent refresh when board is displayed
    window.addEventListener('beforeunload', (e) => {
        if (board.style.display === 'block') {
            e.preventDefault();
            e.returnValue = '';
        }
    });
})();

// Initialize card flipping functionality
const cardsFlip = (() => {
    // Get all card elements
    const cards = document.querySelectorAll('.card');

    // Add click event listener to each card
    cards.forEach(card => {
        // Find the front and back of the card
        const front = card.querySelector('.front');
        const back = card.querySelector('.back');
        // Initialize a flag to track if the card is flipped
        let isFlipped = false;

        // Toggle card when clicked
        card.addEventListener('click', () => {
            // Check if the card is not already flipped
            if (!isFlipped) {
            front.classList.toggle('active');
            back.classList.toggle('active');
            // Set the flag to true to indicate that the card is flipped
            isFlipped = true;
            }
        });
    });
})();

// Wrap Code in a Self-Executing Function
const gameStart = (() => {
    // Retrieve DOM elements for the PvP and PvC buttons.
    const pvpBtn = document.getElementById('pvp-btn');
    const pvcBtn = document.getElementById('pvc-btn');

    let game = ''; // Initialize a variable to store the selected game mode.

    // Add a click event listener to the "PvP" button.
    pvpBtn.addEventListener('click', () => {
        game = 'pvp'; // Set the game mode to Player vs. Player.
        gameMode(game); // Call the gameMode function with the 'pvp' mode.
    });

    // Add a click event listener to the "PvC" button.
    pvcBtn.addEventListener('click', () => {
        game = 'pvc'; // Set the game mode to Player vs. Computer.
        gameMode(game); // Call the gameMode function with the 'pvc' mode.
    });
})();


// Define a function called gameMode that takes a game mode ('pvc' or 'pvp') as an argument.
const gameMode = (game) => {
    // Retrieve DOM elements for 'li' elements and the 'btn' element.
    const li = document.querySelectorAll('li');
    const btn = document.getElementById('btn');

    let gameLevel = ''; // Initialize a variable to store the game level.
    let gamePlayer = ''; // Initialize a variable to store the player's symbol ('X' or 'O').
    let gameComputer = ''; // Initialize a variable to store the computer's symbol ('X' or 'O').

    // Check if the selected game mode is 'pvc' (Player vs. Computer).
    if (game === 'pvc') {
        // Iterate through each 'li' element to find the one with the 'active' class.
        li.forEach(li => {
            if (li.classList.contains('active')) {
                gameLevel = li.textContent; // Set the game level based on the 'active' 'li'.
            }
        });

        // Determine the player's and computer's symbols based on the 'btn' class.
        if (btn.classList.contains('active')) {
            gamePlayer = 'O';
            gameComputer = 'X';
        } else if (!btn.classList.contains('active')) {
            gamePlayer = 'X';
            gameComputer = 'O';
        }

        // Create an object containing the game data.
        const gameData = {
            game,
            gameLevel,
            gamePlayer,
            gameComputer
        };

        // Call the pvcGame module and pass the game data to it.
        pvcGame(gameData);

    } else if (game == 'pvp') {
        // Call the pvpGame module when the game mode is 'pvp'.
        pvpGame();
    }
};

// Define the pvpGame function
const pvpGame = () => {
    // Select DOM elements
    const cards = document.querySelectorAll('.card');
    const backs = document.querySelectorAll('.back img');
    const fronts = document.querySelectorAll('.front');
    
    let playerTurn = 1; // Initialize player's turn to Player 1
    
    // Add a click event listener to each card
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('active')) {
                // Mark the clicked card and its front as active
                card.classList.add('active');
                fronts[index].classList.add('active');
                
                // Count active front cards
                const activeFronts = document.querySelectorAll('.front.active');
                
                // Determine player's turn and change the back image
                if (activeFronts.length % 2 !== 0) {
                    playerTurn = 2; // Odd active fronts, Player 2's turn
                    backs[index].src = 'img/x.png'; // Change back image to '0.png'
                } else {
                    playerTurn = 1; // Even active fronts, Player 1's turn
                    backs[index].src = 'img/0.png'; // Change back image to 'x.png'
                }
            }
        });
    });
};

const pvcGame = (() => {
    // do nothing
});

// Run all modules
menuToggle;
addCurrentYear;
preloader;
toggleButton;
handleQuery;
resizeMenus;
initializeDropdown;
ResponsiveDropdownSizer;
showBoard;
preventRefresh;
cardsFlip;
gameStart;