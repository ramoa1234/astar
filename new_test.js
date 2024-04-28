//make it so that the square are objects
// and they eachave there own status
class square {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.f = 0
        this.status = 0
        if(this.status = 0) {

        }
    }
    
}
const rows = 5
const columns = 5
const board = []
for(let i = 0;i < rows;i++) {
    board[i] = 0
    for(let j = 0;j < columns;j++) {
        temp = new square(i, j)
        board[i][j] = temp
    }
}
const start = board[1][1]
const end = board[4][4]
function astar(start, end) {
    openSet.push(start)
    while(openSet.length > 0) {
        curr = lowes

    }

}
astar(start ,end)
