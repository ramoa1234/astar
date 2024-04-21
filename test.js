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
startX = 0
startY = 0
endX = 4
endY = 4
openSet = []
closedSet = []
function astar(startX, startY, endX, endY) {
    openSet.push([startX, startY])

    while(openSet > 0) {
        let curr = lowestScore(openSet)
        console.log(curr)
        if(curr[0] == endX && curr[1] == endY) {
            return 0
        }
        openSet.splice(current)
        neighbours = neighbours(current)
        for(let i = 0;i < neighbours.length;i++) {
            temp = lowestScore(neighbours[i])
            next = Math.min(temp, next)
            if(neighbours.indexOf(openSet)) {
                openSet.push(neighbours)
            }

        }
    }
    return("not working")

}
function neighbours(board, start) {
    
    return
}
function lowestScore(openSet) {
    for(let i = 0;i < openSet.length;i++) {
        let [x, y] = openSet[i]
        let h = Math.sqrt((endX - x)*2 + (endY - y)*2)
        let g = Math.sqrt((x - endX)*2 + (y - endY)*2)
        let f = h + g
        lowest = Math.min(lowest, f)
    }
    return lowest
}
astar(startX, startY, endX, endY)
