
let board = [];

function initializeBoard() {
    for(let i = 0;i < 25;i++) {
        board[i] = [];
        for(let j = 0;j < 25;j++) {
            board[i][j] = 0;
        }
    }
}
let gridContainer = document.createElement("div");
function drawBoard() {
    document.body.appendChild(gridContainer);
    for(let i = 0;i < 25;i++)
        {for(let j = 0;j < 25;j++) {
            let gridItem = document.createElement("div");
            gridContainer.appendChild(gridItem);

        }
    }
}
console.log(board)
