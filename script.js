var columns = 5
var rows = 5
var grid = []


function Nodes(x, y, container) {
    var h = Math.sqrt((x - (columns - 1)) * (x - (columns - 1)) + (y - (rows - 1)) * (y - (rows - 1)));
    var g = 0
    var f = g + h
    var status = 0
    var node = document.createElement("div")
    node.classList.add("Node")
    container.appendChild(node)
    return node
}
function setGrid() {
    var div = document.createElement("div")
    div.classList.add("container")
    document.body.append(div)
    for(let i = 0;i < columns;i++) {
        grid[i] = []
        for(let j = 0;j < rows;j++) {
            grid[i][j] = Nodes(i, j, div)
        }
    }
}

function queue(openSet) {
    var collection = []
    for(let i = 0;i < 3;i++) {
        
    }
    

}


function aStar(start) {
    var openSet = []
    openSet.push(start)
    
    

}
    
function main() {
    setGrid()
    var start = grid[0][0]
    aStar(start)
}
