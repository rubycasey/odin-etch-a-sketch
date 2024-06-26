// Variables
let gridSideSize = 16;

// Document Elements
const container = document.getElementById("grid-container");
const containerSizePx = window.getComputedStyle(container).getPropertyValue('height');
const containerSize = containerSizePx.slice(0, containerSizePx.length-2);

// Creating divs
console.log(containerSize)
createNewGrid();

function createNewGrid() {
    const gridSize = gridSideSize ** 2;
    let gridCellSize = containerSize / gridSideSize;
    container.style.width = containerSizePx
    for (i = 0; i != gridSize; i++){
        const gridCell = document.createElement("div");
        gridCell.classList.add("gridCell");
        gridCell.style.height = gridCellSize + "px";
        gridCell.style.width = gridCellSize + "px";
        container.appendChild(gridCell);
        //console.log("Cell Created");
    }
};