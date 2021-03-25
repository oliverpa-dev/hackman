// This is an event listener that listens if there was any key pressed
document.onkeydown = function (event) {
    // creating a variable for keyPressed
    var keyPressed = event.key;

    switch (keyPressed) {
        case "ArrowUp":
            // creating the condition that checks if hackman is inside the wall
            if (map[hacmanPos.y - 1][hacmanPos.x] != 1) {
                if (map[hacmanPos.y - 1][hacmanPos.x] == 3) {
                    score += dotScore;
                }
                // Leaves the background empty
                map[hacmanPos.y][hacmanPos.x] = 2;
                // new position of the hackman
                hacmanPos.y -= 1;
                // shows the hackman at the new position
                map[hacmanPos.y][hacmanPos.x] = 4;
            }
            break;
        case "ArrowDown":
            if (map[hacmanPos.y + 1][hacmanPos.x] != 1) {
                if (map[hacmanPos.y + 1][hacmanPos.x] == 3) {
                    score += dotScore;
                }
                map[hacmanPos.y][hacmanPos.x] = 2;
                hacmanPos.y += 1;
                map[hacmanPos.y][hacmanPos.x] = 4;
            }
            break;
        case "ArrowLeft":
            if (map[hacmanPos.x - 1][hacmanPos.y] != 1) {
                if (map[hacmanPos.x - 1][hacmanPos.y] == 3) {
                    score += dotScore;
                }
                map[hacmanPos.y][hacmanPos.x] = 2;
                hacmanPos.x -= 1;
                map[hacmanPos.y][hacmanPos.x] = 4;
            }
            break;
        case "ArrowRight":
            if (map[hacmanPos.x + 1][hacmanPos.y] != 1) {
                if (map[hacmanPos.x + 1][hacmanPos.y] == 3) {
                    score += dotScore;
                }
                map[hacmanPos.y][hacmanPos.x] = 2;
                hacmanPos.x += 1;
                map[hacmanPos.y][hacmanPos.x] = 4;
            }
            break;

        default:
            break;
    }
    drawBoard();
}