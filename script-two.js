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
    return { getMark }
};

const playGame = (function () {
    let board = gameBoard.getBoard();
    gameBoard.resetBoard();
    let playerOne = createPlayer("X");
    let playerTwo = createPlayer("O");
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
            console.log(`Game over! playerOne wins!`);
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
            console.log(`Game over! playerTwo wins!`);
        } else if (!board.includes("")) {
            console.log("Game over! It's a tie!")
        } 
    };

    const switchTurn = () => {
        if (activePlayer === playerOne) {
            activePlayer = playerTwo;
            activeMark = playerTwo.getMark();
        } else {
            activePlayer = playerOne;
            activeMark = playerOne.getMark();
        }
    };

    const playRound = (index) => {
        if (board[index] === "") {
            gameBoard.setMark(index, activeMark);
            switchTurn();
            gameBoard.printBoard();
            checkForWinner();
        }
    };

    return { 
        getActivePlayer, 
        getActiveMark,
        playRound
    };
})();

