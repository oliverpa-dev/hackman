console.log("Welcome to the brand New Gamae that is HackMan");

// Creating a score for everysingle dot that the hackman has eaten
var dotScore = 10;
var score = 0;

// Create an object that contains the position of hackman
var hacmanPos = {
    x: 4,
    y: 5
}

// Create a two dimension array that represents the map
// It is consits of rows and columns
// If it is 1=wall, 2=background, 3=dot
var map = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 3, 3, 4, 3, 3, 1],
    [1, 3, 3, 3, 3, 3, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1]
]

//Create a Function to draw entire board
function drawBoard() {

    // "board" variable refers to the div that we have in html file(We take this by using document(html) + getElementById)
    var htmlBoard = document.getElementById("board");
    // Board is empty
    htmlBoard.innerHTML = "";
    // Instead of 10 we take the length of the map
    // Because we have to dimensional array, we have to create one more loop
    // The firs loop is for x and the second one is for y
    //! Here it takes the length of the map
    for (let y = 0; y < map.length; y++) {
        //! Here it takes the length of the y direction
        for (let x = 0; x < map[y].length; x++) {
            // We want to check the value of the map
            // ! "===" - checks if they are the same value as well as type
            if (map[y][x] === 1) {
                // add a div
                // += - add to it
                // remember to use single quotes because double quotes does not work withing double qoutes
                htmlBoard.innerHTML += "<div class='wall tile'></div>"
            }
            if (map[y][x] === 2) {
                // add a div
                // += - add to it
                // remember to use single quotes because double quotes does not work withing double qoutes
                htmlBoard.innerHTML += "<div class='background tile'></div>"
            }
            if (map[y][x] === 3) {
                // add a div
                // += - add to it
                // remember to use single quotes because double quotes does not work withing double qoutes
                htmlBoard.innerHTML += "<div class='dot tile'></div>"
            }
            if (map[y][x] === 4) {
                // add a div
                // += - add to it
                // remember to use single quotes because double quotes does not work withing double qoutes
                htmlBoard.innerHTML += "<div class='hacman tile'></div>"
            }
        }
        // What is does it will separate the div so they will be equal (after the row is done)
        htmlBoard.innerHTML += "<br>"
    }
    var wScore = document.getElementById("score");
    wScore.innerText = "The Score is " + score;
}

drawBoard();