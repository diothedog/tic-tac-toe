let players = [];

const gameBoard = (function () {
    let board = ["", "", "",
                 "", "", "",
                 "", "", ""];

    const getBoard = () => board;

    const printBoard = () => {
        console.log(board);
    };

    const setMark = (index, mark) => {
        board[index] = mark;
    };

    const getMark = (index) => {
        return board[index];
    };

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        };
    };

    return { 
        getBoard, 
        printBoard, 
        setMark, 
        getMark, 
        resetBoard 
    };  
})();

const createPlayer = function (mark) {
    const getMark = () => mark;
    let name = prompt(`Player ${mark}, what is your name?`);
    const getName = () => name;
    return { getMark, getName }
};

const playGame = (function () {
    let board = gameBoard.getBoard();
    let playerOne = createPlayer("X");
    let playerOneName = playerOne.getName();
    let playerTwo = createPlayer("O");
    let playerTwoName = playerTwo.getName();
    gameBoard.printBoard();

    let activePlayer = playerOne;
    let activeMark = playerOne.getMark();
    
    const getActivePlayer = () => activePlayer;

    const getActiveMark = () => activeMark;

    const checkForWinner = () => {
        if (
            (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
            (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
            (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
            (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
            (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
            (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
            (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
            (board[2] === "X" && board[4] === "X" && board[6] === "X")
        ) {
            console.log(`Game over! ${playerOneName} wins!`);
            displayController.displayMessage(`Game over! ${playerOneName} wins!`);
        } else if (
            (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
            (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
            (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
            (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
            (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
            (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
            (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
            (board[2] === "O" && board[4] === "O" && board[6] === "O")
        ) {
            console.log(`Game over! ${playerTwoName} wins!`);
            displayController.displayMessage(`Game over! ${playerTwoName} wins!`);
        } else if (!board.includes("")) {
            console.log("Game over! It's a tie!")
            displayController.displayMessage("Game over! It's a tie!");
        } 
    };

    const switchTurn = () => {
        if (activePlayer === playerOne) {
            activePlayer = playerTwo;
            activeMark = playerTwo.getMark()
            displayController.displayMessage(`${playerTwoName}, it is your turn.`);
        } else {
            activePlayer = playerOne;
            activeMark = playerOne.getMark();
            displayController.displayMessage(`${playerOneName}, it is your turn.`);
        }
    };

    const playRound = (index) => {
        if (board[index] === "") {
            gameBoard.setMark(index, activeMark);
            switchTurn();
            gameBoard.printBoard();
            displayController.drawBoard();
            checkForWinner();
        }
    };

    return { 
        getActivePlayer, 
        getActiveMark,
        playRound
    };
})();

const displayController = (function () {
    const playGameBtn = document.querySelector("#play-game");
    const cells = document.querySelectorAll(".board-cell");
    let board = gameBoard.getBoard();
    let activePlayer = playGame.getActivePlayer();
    let activeMark = playGame.getActiveMark();

    const activateCells = function () {
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", () => {
                playGame.playRound(i, activeMark);
            })
        }
    };

    const drawBoard = function () {
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = board[i];
        };
    };

    const startGame = function() {
        gameBoard.resetBoard();
        drawBoard();
        activateCells();
        displayMessage(`${activePlayer.getName()}, it is your turn.`)
    };

    playGameBtn.addEventListener("click", startGame);

    const messageDiv = document.querySelector("#message");

    function displayMessage(message) {
        messageDiv.textContent = message;
    };

    return { drawBoard, displayMessage };
})();