board = []
rows = 5
columns = 5
for(let x = 0;x < rows;x++) {
    row = []
    for(let y = 0;y < columns;y++) {
        row.push(0)
    }
    board.push(row)
}
startX = 1
startY = 1
endX = 4
endY = 4
openSet = []
closedSet = []

function astar(startX, startY, endX, endY) {
    openSet.push([startX, startY])
    while(openSet.length > 0) {
        let curr = lowestScore(openSet)
        console.log(curr)
        if(curr[0] == endX && curr[1] == endY) {
            return 0
        }
        closedSet.push(curr)
        openSet = openSet.filter(node => !(node[0] === curr[0] && node[1] === curr[1]));
        console.log(openSet)
        checkNeighbours(curr)
        
        let [tempX, tempY] = lowestScore(openSet)
        console.log(tempX, tempY)
        
    }
    return("not working")

}
function checkNeighbours(curr){
    let [x, y] = curr
    var neighbours = []
    if (board[x + 1] !== undefined && board[x + 1][y] !== undefined) neighbours.push([x + 1, y]);
    if (board[x + 1] !== undefined && board[x + 1][y + 1] !== undefined) neighbours.push([x + 1, y + 1]);
    if (board[x + 1] !== undefined && board[x + 1][y - 1] !== undefined) neighbours.push([x + 1, y - 1]);
    if (board[x - 1] !== undefined && board[x - 1][y - 1] !== undefined) neighbours.push([x - 1, y - 1]);
    if (board[x - 1] !== undefined && board[x - 1][y] !== undefined) neighbours.push([x - 1, y]);
    if (board[x - 1] !== undefined && board[x - 1][y + 1] !== undefined) neighbours.push([x - 1, y + 1]);
    if (board[x][y - 1] !== undefined) neighbours.push([x, y - 1]);
    if (board[x][y + 1] !== undefined) neighbours.push([x, y + 1]);
    neighbours.forEach(neighbours => {
        openSet.push(neighbours)
    })
    return openSet
}
function lowestScore(openSet) {
    for(let i = 0;i < openSet.length;i++) {
        let [x, y] = openSet[i]
        let h = Math.sqrt((endX - x)**2 + (endY - y)**2)
        let g = Math.sqrt((x - endX)**2 + (y - endY)**2)
        let f = h + g
        var lowest = Math.min(lowest, f)
        lowestX = x
        lowestY = y
    }
    return [lowestX, lowestY]
}

console.log(board)
astar(startX, startY, endX, endY)
