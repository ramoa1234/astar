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
start = [1, 1]
end = [4, 4]
openSet = []
closedSet = []
function astar(start, end) {
    openSet.push(start)
    while(openSet.length > 0) {
        curr = lowestScore(openSet,start, end) 
        if(curr == end) {
            console.log("end condition met")
            return 0
        }
        openSet.splice(openSet.indexOf(curr))
        closedSet.push(curr)
        openSet.push(neighbours(curr))
        
        

    }
}
function lowestScore(openSet, start, end) {
    //function needs to be able to take in values in the same array like format as start and end
    lowest = 1000
    startX = start[0]
    startY = start[1]
    endX = end[0]
    endY = end[1]
    for(let i = 0;i < openSet.length;i++) {
        let [x, y] = openSet[i]  
        let g = Math.sqrt((startX - x)**2 + (startY - y)**2)
        let h = Math.sqrt((endX - x)**2 + (endY - y)**2)
        let f = h + g
        if(f < lowest) {    
        lowest = f
        curr = openSet[i]
        }
    }
    return curr
}
function neighbours(curr) {
    let [x, y] = curr
    var neighbours = []
    // needs to be not undefined and needs to not exist in closedSet and make sure that the board value is equal to 0(not obsticle)
    if(board[x + 1][y] != undefined && closedSet.includes(board[x + 1][y]) == false) { neighbours.push([x + 1, y])}
    if(board[x + 1][y + 1] != undefined && closedSet.includes(board[x + 1][y + 1]) == false) {neighbours.push([x + 1][y + 1])}
    if(board[x][y + 1] != undefined && closedSet.includes(board[x][y + 1]) == false) { neighbours.push([x, y + 1])}
    if(board[x + 1][y - 1] != undefined && closedSet.includes(board[x + 1][y - 1]) == false) { neighbours.push([x + 1, y - 1])}
    if(board[x - 1][y] != undefined && closedSet.includes(board[x - 1][y]) == false) { neighbours.push([x - 1, y])}
    if(board[x - 1][y - 1] != undefined && closedSet.includes(board[x - 1][y - 1]) == false) { neighbours.push([x - 1, y - 1])}
    if(board[x][y - 1] != undefined && closedSet.includes(board[x][y - 1]) == false) { neighbours.push([x, y - 1])}



    return neighbours
}

astar(start ,end)       
