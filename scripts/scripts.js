const container = document.getElementById("container");
var size;

// Creates initial grid of 16x16
createGrid(16);
listenForMouseover();

function etchASketch () {
    clearGrid();
    createGrid(getSize());
    listenForMouseover();
}

// Creates the grid with the size value from the user
function createGrid (size) {
    var grid = document.createElement('div');
    grid.id = "grid";
    container.appendChild(grid);

    for(var i = 0; i < size; i++){
        var row = document.createElement('div');
        row.className = "row";
        for(var x = 0; x < size; x++){
            var square = document.createElement('div');
            square.className = "gridsquare";
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

// Gets size value from user 
function getSize () {
    size = prompt("What size grid would you like?");

    if (size > 0 ) {
        return size;
    } else {
        alert("That's not a number");
        getSize();
    }
}

// Clears the current grid
function clearGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Calls the changeColor function upon mouseover each square of the grid
function listenForMouseover () {
    var squares = document.getElementsByClassName('gridsquare');
    for (var i=0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', changeColor);
    }
}

// Changes the square color
function changeColor () {
    this.style.background = 'blue';
}
