const container = document.getElementById("container");
var size = 70;

// Creates initial grid of 70x70
createGrid(size);
listenForMouseover();

function etchASketch () {
    removeGrid();
    getSize();
    createGrid(size);
    listenForMouseover();
}

// Adds the Etch-A-Sketch image
function addImage () {
    var img = document.createElement('img');
    img.src = 'device.png';
    container.appendChild(img);
}

// Creates the grid with the size value from the user
function createGrid (size) {
    addImage();

    var grid = document.createElement('div');
    grid.id = "grid";
    container.appendChild(grid);

    for(var i = 0; i < size; i++){
        var row = document.createElement('div');
        row.className = "row";
        for(var x = 0; x < size; x++){
            var square = document.createElement('div');
            square.className = "gridsquare";
            square.style.width = (600/size)+"px";
            square.style.height = (380/size)+"px";
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

// Gets size value from user 
function getSize () {
    size = prompt("Please pick a numerical value between 1 and 120.");

    if (size > 0 && size < 121) {
        return size;
    } else if (size <= 0 || size > 120) {
        alert("That number is not within 1 and 120. Please try again.");
        getSize();
        return size;
    } else {
        alert("That's not a number... Please enter a numerical value.");
        getSize();
        return size;
    }
}

// Removes the current grid to create a new one
function removeGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Clears the current grid while maintaining current size
function clearCurrentGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(size);
    listenForMouseover();
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
    this.style.background = 'black';
}
