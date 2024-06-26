// Variables
let gridSideSize = 16;

// Document Elements
const container = document.getElementById("container");

// Creating divs

createNewGrid();

function createNewGrid() {
    const gridSize = gridSideSize ** 2
    for (i = 0; i != gridSize; i++){
        const gridCell = document.createElement("div");
        gridCell.classList.add("gridCell");
        container.appendChild(gridCell);
        console.log("Cell Created");
    }
};