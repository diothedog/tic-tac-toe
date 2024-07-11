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

const createPlayers = (function () {
    const playerOne = prompt("Player One, what is your name?");
    const playerTwo = prompt("Player Two, what is your name?");

    const getPlayerOne = () => playerOne;
    const getPlayerTwo = () => playerTwo;

    return{ getPlayerOne, getPlayerTwo };
})();

const playRound = (function () {
    const playerOne = createPlayers.getPlayerOne();
    const playerTwo = createPlayers.getPlayerTwo();
})();

const playGame = function() {
    let board = gameBoard.getBoard;
    gameBoard.printBoard;
    playRound();
}