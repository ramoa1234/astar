//make it so that the square are objects
// and they eachave there own status
class square {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.f = 0
        this.status = 0
        this.div = null
    }
}
const rows = 50
const columns = 50
const board = []
const divs = []
for(let i = 0;i < rows;i++) {
    board[i] = []
    divs[i] = []
    for(let j = 0;j < columns;j++) {
        temp = new square(i, j)
        const div = document.createElement("div")
        div.classList.add("square")
        div.dataset.index
        const container = document.getElementById("container")
        container.appendChild(div)
        temp.div = div
        divs[i][j] = div
        board[i][j] = temp
    }
}
const start =  board[1][1]
start.div.classList = "start"
const end = board[4][4]
end.div.classList = "end"
console.log(end.div)
const openSet = []
const closedSet = []
function astar(start, end) {
    openSet.push(start)
    while(openSet.length > 0) {
        curr = lowestScore(openSet, start, end)
        if(curr == end) {
            console.log("end condition meet")
            return 0
        }
        closedSet.push(curr)
        openSet.splice(curr)
        openSet.push(findNeighbours(curr))
        console.log(openSet)
        console.log(closedSet)
        updateBoard()
    }
}
function lowestScore(openSet,start, end) {
    var index = 1000
    
    for(let i = 0;i < openSet.length;i++) {
        curr = openSet[i]
        var h = Math.trunc(Math.sqrt((end.x - curr.x)**2 + (end.y - curr.y)**2))
        var g = Math.trunc(Math.sqrt((start.x - curr.x)**2 + (start.y - curr.y)**2))
        var f = h + g
        curr.f = f
        if(curr.f < index) {
            index = curr.f
            lowest = curr
        }
    }
    return lowest
}
function findNeighbours(curr) {
    x = curr.x
    y = curr.y
    if (board[x + 1] != undefined && board[x + 1][y] != undefined && board[x + 1][y].status == 0 && !closedSet.includes(board[x + 1][y])) {
        openSet.push(board[x + 1][y]);
    }
    if (board[x - 1] != undefined && board[x - 1][y] != undefined && board[x - 1][y].status == 0 && !closedSet.includes(board[x - 1][y])) {
        openSet.push(board[x - 1][y]);
    }
    if (board[x][y + 1] != undefined && board[x][y + 1].status == 0 && !closedSet.includes(board[x][y + 1])) {
        openSet.push(board[x][y + 1]);
    }
    if (board[x][y - 1] != undefined && board[x][y - 1].status == 0 && !closedSet.includes(board[x][y - 1])) {
        openSet.push(board[x][y - 1]);
    }
    if (board[x + 1] != undefined && board[x + 1][y + 1] != undefined && board[x + 1][y + 1].status == 0 && !closedSet.includes(board[x + 1][y + 1])) {
        openSet.push(board[x + 1][y + 1]);
    }
    if (board[x - 1] != undefined && board[x - 1][y - 1] != undefined && board[x - 1][y - 1].status == 0 && !closedSet.includes(board[x - 1][y - 1])) {
        openSet.push(board[x - 1][y - 1]);
    }
    if (board[x + 1] != undefined && board[x + 1][y - 1] != undefined && board[x + 1][y - 1].status == 0 && !closedSet.includes(board[x + 1][y - 1])) {
        openSet.push(board[x + 1][y - 1]);
    }
    if (board[x - 1] != undefined && board[x - 1][y + 1] != undefined && board[x - 1][y + 1].status == 0 && !closedSet.includes(board[x - 1][y + 1])) {
        openSet.push(board[x - 1][y + 1]);
    }
    return openSet
}


function updateBoard() {



}
astar(start, end)
