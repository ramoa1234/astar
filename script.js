var grid = []
var columns = 5
var rows = 5
var container = []
function setContainer() {
    container = document.createElement("div")
    container.classList.add("container")
    document.body.append(container)
    for(let i = 0;i < columns;i++) {
        grid[i] = []
        for(let j = 0;j < rows;j++) {
            grid[i][j] = 0
        }
    }
}
function drawGrid() {
    for(let i = 0;i < columns;i++) {
        for(let j = 0;j < rows;j++) {
            var Node = document.createElement("div")
            Node.classList.add("Node")
            container.appendChild(Node)
        }
    }
}

function Node(i, j) {
    var h = (Math.sqrt(i - (columns- 1))*(i - (columns - 1)+(j -(rows - 1)*(j- (rows - 1)))))
    var g = 0
    var f = g + h
}

function surronding(current) {
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
    var openSet = grid[0][0]
    

    while(openSet != 0) {
        var current = Math.min(Node(openSet))
        if(current == end) {
            break
        } else {
            var temp = surronding(current)
            console.log(temp)
        }
    }
}
