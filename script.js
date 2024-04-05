var columns = 5
var rows = 5
var grid = []


function Nodes(x, y, container) {
    var h = (Math.sqrt(x - (columns - 1))*(x - (columns - 1))+(y - (rows - 1)+(y - (rows - 1))))
    var g = 0 // start at 0,0 so g can be 0
    var f = g + h
    var status = 0
    var div = document.createElement("div")
    div.classList.add("node")
    container.appendChild(div)
    return div;
}
function setGrid() {
    for(let i = 0;i < columns;i++) {
        grid[i] = []
        for(let j = 0;j < rows;j++) {
            grid[i][j] = Nodes(i, j)
        }
    }
}
function surrounding() {
    let temp = []
    for(let i = 0;i < 2;i++) {
        temp.push(current[i][+1])
    }
    temp.push(current[-1])
    temp.push(current[+1])
    for(let j = 0;j < 2;j++) {
        temp.push(current[i][-i])
    }
    return temp
}
function aStar() {
    var start = grid[0][0]
    var openSet = []
    openSet.push(start)
    var closedSet = []
    var result = grid[rows - 1][columns - 1]
    while(openSet != 0) {
    //or current Node and current node does not equal goal
    var current = openset[0][0]
    if(current != 0) {

        } else {
            var surrounding = []
            surrounding = surrounding(current)
        }
    }
}
function main() {
    var container = document.createElement("div")
    document.body.append(container)
    setGrid()
    aStar()
}
