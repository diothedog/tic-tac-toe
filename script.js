let players = [];

const gameBoard = (function () {
    let board = ["", "", "",
                 "", "", "",
                 "", "", ""];

    const getBoard = () => board;

    return { getBoard };  
})();

function createPlayer(name) {
    players.push(name);

    return { players };
}