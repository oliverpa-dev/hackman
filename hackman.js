console.log("The Hackman game has started !!")

// 1=wall, 2=background, 3=dot, 4=hackman
var map = [
    [1, 1, 1, 1, 1],
    [1, 3, 3, 3, 1],
    [1, 3, 4, 3, 1],
    [1, 1, 1, 1, 1]
]

// CREATE A FUNCTION TO DRAW ENTIRE BOARD

function drawBoard() {

    var htmlBoard = document.getElementById("board")
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {

            //add a div
            if (map[y][x] === 1) {
                htmlBoard.innerHTML += "<div class= 'wall tile'></div>"
            }
            if (map[y][x] === 2) {
                htmlBoard.innerHTML += "<div class= 'background tile'></div>"
            }
            if (map[y][x] === 3) {
                htmlBoard.innerHTML += "<div class= 'dot tile'></div>"
            }
            if (map[y][x] === 4) {
                htmlBoard.innerHTML += "<div class= 'hacman tile'></div>"
            }

        }
        htmlBoard.innerHTML += "<br>"
    }
}

drawBoard();