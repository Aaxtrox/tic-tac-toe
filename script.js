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

// Module to handle responsive navigation and footer height adjustment based on logo image size
const handleQuery = (() => {
    // DOM elements
    const logoImg = document.querySelector('.logo');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');

    // Function to update nav and footer heights based on logoImg height
    function updateNavAndFooterHeight() {
        if (logoImg && nav && footer) {
            if (logoImg.clientHeight > nav.clientHeight) {
                // Update nav and footer heights based on logo_img height
                nav.style.height = 'fit-content';
                const navHeight = nav.clientHeight;
                footer.style.height = `${navHeight}px`;
            }
        }
    }

    // Run on window resize
    window.addEventListener('resize', updateNavAndFooterHeight);

    // Run on window load
    window.addEventListener('load', updateNavAndFooterHeight);
})();

// Module to dynamically adjust the width of a dropdown to match a button wrapper's width
const ResponsiveDropdownSizer = (() => {
    // DOM elements
    const dropdown = document.querySelector('.dropdown');
    const btnWrapper = document.querySelector('.btn-wrapper');

    function updateDropdownWidth() {
        if (dropdown && btnWrapper) {
            // Update dropdown width based on btnWrapper width
            dropdown.style.width = `${btnWrapper.clientWidth}px`;
        }
    }

    // Run on window resize
    window.addEventListener('resize', updateDropdownWidth);

    // Run on window load
    window.addEventListener('load', updateDropdownWidth);

    // Initial update on page load
    updateDropdownWidth();
})();

// Module to dynamically resize and position menus based on the card's height
const resizeMenus = (() => {
    // DOM elements
    const menuPvp = document.querySelector('.menu-pvp');
    const menuPvc = document.querySelector('.menu-pvc');
    const card = document.getElementById('card');

    function updateMenuSizesAndPositions() {
        if (card && menuPvp && menuPvc) {
            const cardHeight = card.clientHeight + 5;
            if (cardHeight > menuPvp.clientHeight || cardHeight > menuPvc.clientHeight) {
                // Calculate new heights and update menu positions
                menuPvp.style.height = `${cardHeight}px`;
                menuPvp.style.top = `calc(50% - ${cardHeight / 2}px)`;
                menuPvc.style.height = `${cardHeight}px`;
                menuPvc.style.top = `calc(50% - ${cardHeight / 2}px)`;
            }
        }
    }

    // Run on window resize
    window.addEventListener('resize', updateMenuSizesAndPositions);

    // Run on window load
    window.addEventListener('load', updateMenuSizesAndPositions);

    // Initial update on page load
    updateMenuSizesAndPositions();
})();

// Module to display the game board and navigation menu when specific buttons are clicked
const showBoard = (() => {
    // DOM elements
    const main = document.querySelector('main');
    const btnWrapperPvp = document.querySelector('.btn-wrapper-pvp');
    const btnWrapperPvc = document.querySelector('.btn-wrapper-pvc');
    const board = document.querySelector('.board');
    const navMenu = document.querySelector('.nav-menu');

    function displayGameBoard() {
        main.style.display = 'none';
        board.style.display = 'block';
        navMenu.style.visibility = 'visible';
    }

    // Event listeners to show the board when buttons are clicked
    if (btnWrapperPvp) {
        btnWrapperPvp.addEventListener('click', displayGameBoard);
    }

    if (btnWrapperPvc) {
        btnWrapperPvc.addEventListener('click', displayGameBoard);
    }
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

// Module to prevent text selection on specific buttons (e.g., "New Game" and "Restart").
const preventSelection = (() => {
    // DOM elements
    const newGame = document.querySelector('.new-game');
    const restart = document.querySelector('.restart');

    // Prevent text selection on "New Game" button
    newGame.addEventListener('mousedown', (e) => {
        // Prevent the default text selection behavior when the button is clicked
        e.preventDefault();
    });
})();

// Module to implement card-flipping functionality
const cardsFlip = (() => {
    // Get all card elements
    const cards = document.querySelectorAll('.card');

    // Function to reset the 'isFlipped' property for all cards
    function resetIsFlipped() {
        cards.forEach(card => {
            card.isFlipped = false;
        });
    }

    // Loop through each card element
    cards.forEach(card => {
        // Find the front and back of the card
        const front = card.querySelector('.front');
        const back = card.querySelector('.back');

        // Initialize a flag to track if the card is flipped
        card.isFlipped = false;

        // Toggle card when clicked
        card.addEventListener('click', () => {
            // Check if the card is not already flipped
            if (!card.isFlipped) {
                front.classList.toggle('active');
                back.classList.toggle('active');

                // Set the flag to true to indicate that the card is flipped
                card.isFlipped = true;
            }
        });
    });

    // Return an object with the reset function
    return {
        resetIsFlipped,
    };
})();

// Game Start Module: Initializes the selected game mode (PvP or PvC) based on user interaction with buttons.
const gameStart = (() => {
    // Retrieve DOM elements for the PvP and PvC buttons.
    const pvpBtn = document.getElementById('pvp-btn');
    const pvcBtn = document.getElementById('pvc-btn');

    let game = ''; // Initialize a variable to store the selected game mode.

    // Add a click event listener to the "PvP" button.
    pvpBtn.addEventListener('click', () => {
        game = 'pvp'; // Set the game mode to Player vs. Player.
        gameMode(game); // Call the gameMode function with the 'pvp' mode.
        // add class active to pvpBtn
        pvpBtn.classList.add('active');
    });

    // Add a click event listener to the "PvC" button.
    pvcBtn.addEventListener('click', () => {
        game = 'pvc'; // Set the game mode to Player vs. Computer.
        gameMode(game); // Call the gameMode function with the 'pvc' mode.
        // add class active to pvcBtn
        pvcBtn.classList.add('active');
    });
})();

// Game Mode Selector: Determines game settings based on the selected mode ('pvc' or 'pvp').
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

// Two-Player Card-Flipping Game Logic
const pvpGame = () => {
    // Select DOM elements
    const cards = document.querySelectorAll('.card');
    const backs = document.querySelectorAll('.back img');
    const fronts = document.querySelectorAll('.front');
    const restartButtons = document.querySelectorAll('#restart');
    const game_info = document.querySelector('.game-info');
    
    let playerTurn = 1; // Initialize player's turn to Player 1
    let flippedCards = new Array(9).fill(null); // Array to store flipped card values
    
    // Function to determine the value based on img src
    const determineValue = (src) => {
        return src.endsWith('x.png') ? 'X' : '0';
    };

    // Add a click event listener to the all restart buttons
    restartButtons.forEach(restartButton => {
        restartButton.addEventListener('click', () => {
            setTimeout(() => {
                // Reset the flippedCards array by creating a new array with null values
                flippedCards = new Array(9).fill(null);

                // Remove the 'active' class from clicked cards
                cards.forEach(card => {
                    card.classList.remove('active');
                });

                // Remove the 'active' class from the fronts of the clicked cards
                fronts.forEach(front => {
                    front.classList.remove('active');
                });
            }, 500);
        });
    });
    
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
                    game_info.innerText = "Player 2's Move"; // Display correct player's turn inside game-info

                } else {
                    playerTurn = 1; // Even active fronts, Player 1's turn
                    backs[index].src = 'img/0.png'; // Change back image to 'x.png'
                    game_info.innerText = "Player 1's Move"; // Display correct player's turn inside game-info
                }

                // Determine the value based on the img src
                const cardValue = determineValue(backs[index].src);
                
                // Store the flipped card's value
                flippedCards[index] = cardValue;
                
                // Log the flippedCards array to the console
                console.log(flippedCards);

                // Check if there is a winner
                checkWinner(flippedCards);
            }
        });
    });
};

// Player vs Computer Card-Flipping Game Logic
const pvcGame = (gameData) => {
    const { game, gameLevel, gamePlayer, gameComputer } = gameData;

    // Select DOM elements
    const cards = document.querySelectorAll('.card');
    const backs = document.querySelectorAll('.back');
    const backs_img = document.querySelectorAll('.back img');
    const fronts = document.querySelectorAll('.front');
    const restartButtons = document.querySelectorAll('#restart');
    const game_status_container = document.querySelector('.game-status-container');
    const game_info = document.querySelector('.game-info');

    let flippedCards = new Array(9).fill(null); // Array to store flipped card values
    let cardValue = ''; // Variable to store the flipped card's value

    // Add a click event listener to all restart buttons
    restartButtons.forEach(restartButton => {
        restartButton.addEventListener('click', () => {
            // Set a timeout to provide a visual cue for the user (500ms delay).
            setTimeout(() => {
                // Reset the flippedCards array by creating a new array with null values.
                flippedCards = new Array(9).fill(null);

                // Remove the 'active' class from clicked cards to hide them.
                cards.forEach(card => {
                    card.classList.remove('active');
                });

                // Remove the 'active' class from the fronts of the clicked cards.
                fronts.forEach(front => {
                    front.classList.remove('active');
                });

                // Call the 'init' function to restart the game.
                init();
            }, 500); // Adjust the delay duration as needed for user experience.
        });
    });

    // Define the player's turn function
    const playerTurn = () => {
        // Update the game information to indicate it's the player's turn
        game_info.innerText = "Player's Move";

        // Iterate through each card and manage pointer events to allow or prevent clicks
        cards.forEach(card => {
            if (!card.classList.contains('active')) {
                // Enable pointer events for cards that are not active
                card.style.pointerEvents = 'auto';
            } else if (card.classList.contains('active')) {
                // Disable pointer events for cards that are already active
                card.style.pointerEvents = 'none';
            }
        });

        // Add a click event listener to each card
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (!card.classList.contains('active')) {
                    // Set the card's image source based on the player's symbol (X or O)
                    if (gamePlayer === 'X') {
                        backs_img[index].src = 'img/x.png';
                    } else if (gamePlayer === 'O') {
                        backs_img[index].src = 'img/0.png';
                    }

                    // Mark the clicked card and its front as active
                    card.classList.add('active');
                    fronts[index].classList.add('active');

                    // Determine the value of the card based on the player's symbol (X or O)
                    cardValue = gamePlayer;

                    // Store the value of the flipped card in the flippedCards array
                    flippedCards[index] = cardValue;

                    // Log the current state of the flippedCards array to the console
                    console.log(flippedCards);

                    // Check if there is a winner or if the game should continue
                    checkWinner(flippedCards);

                    // If the game_status_container is not visible, it's the computer's turn
                    if (game_status_container.style.visibility !== 'visible') {
                        computerTurn();
                    } else if (game_status_container.style.visibility === 'visible') {
                        // Turn off click event listeners for each card when the game has ended
                        cards.forEach(card => {
                            card.style.pointerEvents = 'none';
                        });
                    }
                }
            });
        });
    }

    // Determines the computer's optimal move using minimax.
    function bestMove() {
        let bestScore = -Infinity; // Initialize the best score with negative infinity.
        let move; // Initialize the best move (index of the optimal move).
    
        // Iterate through all available spots on the game board.
        for (let i = 0; i < flippedCards.length; i++) {
            // Check if the current spot on the game board is available (not yet flipped).
            if (flippedCards[i] === null) {
                // Temporarily set the current spot with the computer player's symbol.
                flippedCards[i] = gameComputer;
    
                // Recursively evaluate this move using the minimax algorithm and obtain a score.
                let score = minimax(flippedCards, 0, false);
    
                // Undo the temporary move (backtrack) by resetting the spot to null.
                flippedCards[i] = null;
    
                // If the current move's score is better than the previous best score, update the best score and move.
                if (score > bestScore) {
                    bestScore = score;
                    move = i; // Update the best move.
                }
            }
        }
    
        // Return the index of the best move based on the minimax algorithm, representing the optimal move for the computer player.
        return move;
    }

    // Define score values for X and O symbols in the game.
    let scores = {
        X: gameComputer === 'X' ? 1 : -1, // Assign 1 if gameComputer is 'X', else assign -1
        O: gameComputer === 'O' ? 1 : -1, // Assign 1 if gameComputer is 'O', else assign -1
        tie: 0 // Score value for a tie game.
    };

    // Function for evaluating game status in a tic-tac-toe match, determining the winner, or a tie.
    function checkMinimax(flippedCards) {
        // Flag to check if a winner is found
        let winnerFound = false;
    
        // Define winning combinations for tic-tac-toe
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal combinations
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical combinations
            [0, 4, 8], [2, 4, 6] // Diagonal combinations
        ];
    
        // Iterate through each winning combination
        for (let i = 0; i < winningCombos.length; i++) {
            // Get the values of the flipped cards based on the winning combination
            const card1 = flippedCards[winningCombos[i][0]];
            const card2 = flippedCards[winningCombos[i][1]];
            const card3 = flippedCards[winningCombos[i][2]];
    
            // Check if all three cards have the same value and are not null
            if (card1 && card1 === card2 && card2 === card3) {
                // Return the winner's symbol (either 'X' or 'O')
                return card1;
            }
        }
    
        // Check if all cards are flipped and there is no winner
        if (!winnerFound && !flippedCards.includes(null)) {
            // Return 'tie' to indicate a tie game
            return 'tie';
        }
    
        // If no winner or tie is found, return false to continue the game
        return false;
    }    

    // Evaluates and scores game states using the minimax algorithm, aiming to find the best move for the computer or player.
    function minimax(flippedCards, depth, isMaximizing) {
        // Check the current state of the game (win, lose, or tie).
        let result = checkMinimax(flippedCards);
    
        if (result !== false) {
            // If the game has ended, return the score (positive for a win, negative for a loss, 0 for a tie).
            return scores[result];
        }
    
        if (isMaximizing) {
            let bestScore = -Infinity;
    
            for (let i = 0; i < flippedCards.length; i++) {
                if (flippedCards[i] === null) {
                    // Simulate a potential move for the computer (maximizing player).
                    flippedCards[i] = gameComputer;
    
                    // Recursively calculate the score for this move, considering the opponent's best move.
                    let score = minimax(flippedCards, depth + 1, false);
    
                    // Undo the simulated move to explore other possibilities.
                    flippedCards[i] = null;
    
                    if (gameLevel === 'Hard') {
                        // Adjust the score based on depth for 'Hard' difficulty. 
                        score -= depth;
                    }
    
                    // Determine the best score for maximizing (computer's perspective).
                    bestScore = Math.max(score, bestScore);
                }
            }
    
            return bestScore;
        } else {
            let bestScore = Infinity;
    
            for (let i = 0; i < flippedCards.length; i++) {
                if (flippedCards[i] === null) {
                    // Simulate a potential move for the player (minimizing player).
                    flippedCards[i] = gamePlayer;
    
                    // Recursively calculate the score for this move, considering the computer's best move.
                    let score = minimax(flippedCards, depth + 1, true);
    
                    // Undo the simulated move to explore other possibilities.
                    flippedCards[i] = null;
    
                    if (gameLevel === 'Hard') {
                        // Adjust the score based on depth for 'Hard' difficulty.
                        score += depth;
                    }
    
                    // Determine the best score for minimizing (player's perspective).
                    bestScore = Math.min(score, bestScore);
                }
            }
    
            return bestScore;
        }
    }    

    // Module to handle the computer's turn.
    const computerTurn = () => {
        // Update game info to indicate it's the computer's move.
        game_info.innerText = "Computer's Move";
    
        // Disable click event listeners for all cards.
        cards.forEach(card => {
            card.style.pointerEvents = 'none';
        });
    
        // Define a function to handle the computer's move.
        const makeComputerMove = (index) => {
            // Set the card's back image based on the gameComputer (X or O).
            backs_img[index].src = gameComputer === 'X' ? 'img/x.png' : 'img/0.png';
            
            // Mark the clicked card and its front as active.
            cards[index].classList.add('active');
            fronts[index].classList.add('active');
            backs[index].classList.add('active');
            
            // Determine the value based on gameComputer.
            const cardValue = gameComputer;
            
            // Store the flipped card's value.
            flippedCards[index] = cardValue;
            
            // Log the flippedCards array for debugging.
            console.log(flippedCards);
            
            // Check if there is a winner or if the game is over.
            const gameResult = checkWinner(flippedCards);
            
            // If the game is not over, proceed to the player's turn.
            if (game_status_container.style.visibility !== 'visible') {
                playerTurn();
            } else {
                // If the game is over, disable click event listeners for each card.
                cards.forEach(card => {
                    card.style.pointerEvents = 'none';
                });
            }
        };
    
        // Handle the computer's move based on the selected game level.
        switch (gameLevel) {
            case 'Easy':
                // Identify empty spots (null values) in the flippedCards array.
                const nullValues = flippedCards.reduce((acc, value, index) => {
                    if (value === null) {
                        acc.push(index);
                    }
                    return acc;
                }, []);
    
                // Select a random index from nullValues array.
                const randomIndex = Math.floor(Math.random() * nullValues.length);
    
                setTimeout(() => {
                    makeComputerMove(nullValues[randomIndex]);
                }, 500);
                break;
            case 'Hard':
                setTimeout(() => {
                    // Use the bestMove function to select the computer's move (minimax algorithm).
                    const bestMoveIndex = bestMove();
                    makeComputerMove(bestMoveIndex);
                }, 500);
                break;
            default:
                // For other levels, perform the same actions as "Hard."
                setTimeout(() => {
                    const bestMoveIndex = bestMove();
                    makeComputerMove(bestMoveIndex);
                }, 500);
                break;
        }
    };    

    // Initialize the game by determining the starting player and taking the appropriate action.
    const init = () => {
        // Determine the starting player (X or O) based on the gamePlayer value.
        if (gamePlayer === 'X') {
            // If the starting player is X, it's the Player's turn.
            playerTurn();
        } else if (gamePlayer === 'O') {
            // If the starting player is O, it's the Computer's turn.
            computerTurn();
        }
    }

    // Immediately invoke the initialization function to start the game.
    init();
};

// Function to check for a winner and update the game UI.
const checkWinner = (flippedCards) => {
    // Select relevant DOM elements
    const board_grid = document.querySelector('.board-grid');
    const nav_menu = document.querySelector('.nav-menu');
    const game_status_container = document.querySelector('.game-status-container');
    const game_info = document.querySelector('.game-info');

    // Define the winning combinations for the game
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ];

    let winnerFound = false; // Flag to check if a winner is found

    // Iterate through each winning combination
    for (const combo of winningCombos) {
        // Get the values of the flipped cards based on the winning combination
        const card1 = flippedCards[combo[0]];
        const card2 = flippedCards[combo[1]];
        const card3 = flippedCards[combo[2]];

        // Check if all three cards have the same value and are not null
        if (card1 && card1 === card2 && card2 === card3) {
            // A winner is found; display the winning value
            console.log(`Winner found with value: ${card1}`);

            // Set the winnerFound flag to true
            winnerFound = true;

            // Hide the navigation menu
            nav_menu.style.visibility = 'hidden';

            // Make the game status container visible
            game_status_container.style.visibility = 'visible';

            // Block the board to prevent further moves
            board_grid.style.pointerEvents = 'none';

            // Hide the game info
            game_info.style.visibility = 'hidden';

            // Notify the game of the winner
            gameStatus(card1);

            return card1;
        }
    }

    // Check if all cards are flipped and there is no winner (tie)
    if (!winnerFound && !flippedCards.includes(null)) {
        // It's a tie; display a message
        console.log("It's a tie!");

        // Hide the navigation menu
        nav_menu.style.visibility = 'hidden';

        // Hide the game info
        game_info.style.visibility = 'hidden';

        // Make the game status container visible
        game_status_container.style.visibility = 'visible';

        // Notify the game of a tie
        gameStatus('tie');

        return 'tie';
    }

    // No winner or tie found
    return winnerFound;
};

// Define a function to update the game status based on the provided 'status' parameter
const gameStatus = (status) => {
    // Select the game status element in the DOM
    const game_status = document.querySelector('.game-status');
    const pvpBtn = document.getElementById('pvp-btn');
    const pvcBtn = document.getElementById('pvc-btn');

    let game = ''; // Initialize a variable to store the selected game mode.
    let gamePlayer = ''; // Initialize a variable to store the player's symbol ('X' or 'O').

    //check if pcd button was clicked and set game to pvc
    if (pvcBtn.classList.contains('active')) {
        game = 'pvc';
    } else if (pvpBtn.classList.contains('active')) {
        game = 'pvp';
    }

    // Determine the player's and computer's symbols based on the 'btn' class.
    if (btn.classList.contains('active')) {
        gamePlayer = 'O';
    } else if (!btn.classList.contains('active')) {
        gamePlayer = 'X';
    }

    // if game is pvp
    if (game === 'pvp') {
        // Check if 'status' is equal to 'X' (indicating Player 1 wins)
        if (status === 'X') {
            // Update the game status text to indicate that Player 1 wins
            game_status.innerText = 'Player 1 wins!';
        } 
        // Check if 'status' is equal to '0' (indicating Player 2 wins)
        else if (status === '0') {
            // Update the game status text to indicate that Player 2 wins
            game_status.innerText = 'Player 2 wins!';
        } else if (status === 'tie'){
            // Update the game status text to indicate that it's a tie
            game_status.innerText = "It's a tie!";
        }
    } else if (game === 'pvc') {
        // Check if 'status' is equal to 'X' (indicating Player 1 wins)
        if (status === 'X') {
            // check if gamePlayer is X
            if (gamePlayer === 'X') {
                // Update the game status text to indicate that Player 1 wins
                game_status.innerText = 'Player wins!';
            } else if (gamePlayer === 'O') {
                // Update the game status text to indicate that Player 1 wins
                game_status.innerText = 'Computer wins!';
            }
        } 
        // Check if 'status' is equal to '0' (indicating Player 2 wins)
        else if (status === 'O') {
            // check if gamePlayer is X
            if (gamePlayer === 'X') {
                // Update the game status text to indicate that Player 1 wins
                game_status.innerText = 'Computer wins!';
            } else if (gamePlayer === 'O') {
                // Update the game status text to indicate that Player 1 wins
                game_status.innerText = 'Player wins!';
            }
        } else if (status === 'tie'){
            // Update the game status text to indicate that it's a tie
            game_status.innerText = "It's a tie!";
        }
    }
};

// Module to handle responsive behavior of the card grid within the board
const boardResponsive = (() => {
    // Select the .board and .card-grid elements
    const board = document.querySelector('.board');
    const card_grid = document.querySelector('.card-grid');
    const board_grid = document.querySelector('.board-grid');

    // Get the font size in rem units
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Define a function to calculate and set the card grid height
    const heightCalc = () => {
        // Get the current width of the board grid
        const gridWidth = board_grid.clientWidth;
        // Get the current height of the card grid
        const gridHeight = card_grid.clientHeight;

        // Calculate the desired height for each card (assuming a 3x3 grid)
        const cardHeight = (gridHeight / 3) - (2 * rem);

        // Set the grid template rows and columns based on the calculated card height
        card_grid.style.gridTemplateRows = `repeat(3, ${cardHeight}px)`;
        card_grid.style.gridTemplateColumns = `repeat(3, ${cardHeight}px)`;

        // if card-grid is bigger than board-grid, calculate desire width for each card (assuming a 3x3 grid)
        if (gridWidth < card_grid.clientWidth) {
            const cardWidth = (gridWidth / 3) - (2 * rem);
            card_grid.style.gridTemplateRows = `repeat(3, ${cardWidth}px)`;
            card_grid.style.gridTemplateColumns = `repeat(3, ${cardWidth}px)`;
        }
    };

    // Define a function to check if the board is displayed as a block
    const checkDisplay = () => {
        // Get the computed style of the .board element to check its display property
        const boardDisplayStyle = getComputedStyle(board).display;

        // If the board is displayed as 'block', call the heightCalc function
        if (boardDisplayStyle === 'block') {
            heightCalc();
        }
    };

    // Create a ResizeObserver to monitor changes in the .board element
    const observer = new ResizeObserver(checkDisplay);

    // Start observing the .board element for changes in its dimensions
    observer.observe(board);

    // Call the heightCalc function initially to set the initial grid template
    heightCalc();
})();

// Module to handle starting a new game by reloading the current page when a 'new game' button or link is clicked.
const newGame = (() => {
    // Select all DOM elements with the id 'new-game'
    const newGames = document.querySelectorAll('#new-game');

    // Add a click event listener to each 'new game' button or link
    newGames.forEach(newGameElement => {
        newGameElement.addEventListener('click', () => {
            // Reload the current page to start a new game
            location.reload();
        });
    });
})();

// Initialize the restart functionality
const restart = (() => {
    // Select DOM elements
    const restartButtons = document.querySelectorAll('#restart'); // Get all restart buttons
    const game_status_container = document.querySelector('.game-status-container'); // Game status container
    const board_grid = document.querySelector('.board-grid'); // Board grid
    const nav_menu = document.querySelector('.nav-menu'); // Navigation menu
    const game_info = document.querySelector('.game-info'); // Game info display

    // Add a click event listener to the all restart buttons
    restartButtons.forEach(restartButton => {
        restartButton.addEventListener('click', () => {

            // Reset card states
            cardsFlip.resetIsFlipped(); // Reset card flip states to their initial state

            // Flip all cards back to their original state
            const cards = document.querySelectorAll('.card'); // Get all cards
            cards.forEach(card => {
                card.querySelector('.front').classList.remove('active');
                card.querySelector('.back').classList.remove('active');
            });

            // Hide the game status container
            game_status_container.style.visibility = 'hidden'; // Hide the game outcome/status container

            // Unblock the board
            board_grid.style.pointerEvents = 'auto'; // Enable interactions with the game board

            // Show the navigation menu
            nav_menu.style.visibility = 'visible'; // Display the navigation menu

            // Show the game info
            game_info.style.visibility = 'visible'; // Display the game info

            // Reset the game info to Player 1's Move
            game_info.innerText = "Player 1's Move"; // Set the game info to indicate Player 1's turn

            // Block cards temporarily
            cards.forEach(card => {
                card.style.pointerEvents = 'none'; // Disable interactions with cards
            });

            // Unlock cards after a short delay
            setTimeout(() => {
                cards.forEach(card => {
                    card.style.pointerEvents = 'auto'; // Re-enable interactions with cards
                });
            }, 500);
        });
    });
})();


// Run all modules

// User interface and interaction
menuToggle;
toggleButton;
initializeDropdown;
preventRefresh;
preventSelection;

// Responsive Design
ResponsiveDropdownSizer;
boardResponsive;
handleQuery;
resizeMenus;

// Page Loading and Initialization
addCurrentYear;
preloader;

// Game Logic and Functionality
showBoard;
cardsFlip;
gameStart;
newGame;
restart;