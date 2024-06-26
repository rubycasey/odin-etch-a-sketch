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
    // Container Math
    const gridSize = gridSideSize ** 2;
    let gridCellSize = containerSize / gridSideSize;
    container.style.width = containerSizePx

    for (i = 0; i != gridSize; i++){
        // Create Cell
        const gridCell = document.createElement("div");
        gridCell.classList.add("gridCell");
        gridCell.style.height = gridCellSize + "px";
        gridCell.style.width = gridCellSize + "px";
        gridCell.style.opacity = 0;

        // Cell Functions
        gridCell.addEventListener("mouseenter", () => {
            gridCell.style.opacity = Number(gridCell.style.opacity) + 0.1;
        });
        //gridCell.addEventListener("mouseleave", () => {
        //    gridCell.style.opacity = Number(gridCell.style.opacity) + 0.1;
        //});

        container.appendChild(gridCell);
        //console.log("Cell Created");
    }
};