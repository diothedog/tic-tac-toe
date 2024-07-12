
const gameBoard = (function () {
    let board = ["", "", "",
                 "", "", "",
                 "", "", ""];

    const getBoard = () => board;

    const printBoard = () => {
        console.log(board);
    }

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    }

    return { getBoard, printBoard, resetBoard };  
})();

const playGame = function() {
    let board = gameBoard.getBoard();

    gameBoard.resetBoard();

    gameBoard.printBoard();

    const playerOne = prompt("Player One, what is your name?");
    const playerTwo = prompt("Player Two, what is your name?");

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
            alert(`Game over! ${playerOne} wins!`);
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
            alert(`Game over! ${playerTwo} wins!`);
        } else if (!board.includes("")) {
            alert("Game over! It's a tie!")
        } else {
            playRound();
        }    
    }

    const playRound = () => {     
        let cell = prompt(`${activePlayer}, where do you want to place your mark?`)
        let index = Number(cell);

        while (board[index] !== "") {
            cell = prompt("That space is already occupied. Please select another space.");
            index = Number(cell);
        } 

        board[index] = mark;

        gameBoard.printBoard();

        displayController.drawBoard();

        switchTurn();

        checkForWinner();
    }

    playRound();
}

const displayController = (function () {
    const playGameBtn = document.querySelector("#play-game");
    playGameBtn.addEventListener("click", playGame);

    const cells = document.querySelectorAll(".board-cell");
    let board = gameBoard.getBoard();

    cells.forEach((cell) => {
        cell.addEventListener("click", () => {
            cell.textContent = mark;
        })
    })

    const drawBoard = function () {
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = board[i];
        };
    };

    return { drawBoard }
})();
