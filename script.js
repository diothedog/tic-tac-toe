let players = [];

const gameBoard = (function () {
    let board = ["", "", "",
                 "", "", "",
                 "", "", ""];

    const getBoard = () => board;

    const printBoard = () => {
        console.log(board);
    }

    return { getBoard, printBoard };  
})();

function createPlayer(name) {
    players.push(name);

    return { players };
}

const gameController = (function() {
    let board = gameBoard.getBoard();

    const playerOne = prompt("Player One, what is your name?");
    createPlayer(playerOne);
    const playerTwo = prompt("Player Two, what is your name?");
    createPlayer(playerTwo);

    let activePlayer = playerOne;
    let mark = "X"

    const switchTurn = () => {
        if (activePlayer === playerOne) {
            activePlayer = playerTwo;
            mark = "O";
        } else {
            activePlayer = playerOne;
            mark = "X";
        }
    }

    const playRound = () => {     
        gameBoard.printBoard();

        let cell = prompt(`${activePlayer}, where do you want to place your mark?`)
        let index = Number(cell);

        while (board[index] !== "") {
            cell = prompt("That space is already occupied. Please select another space.");
            index = Number(cell);
        } 

        board[index] = mark;
        
        switchTurn();
    }

    return { playRound };
})();

