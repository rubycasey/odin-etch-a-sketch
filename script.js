// Variables
let gridSideSize = 16;

// Document Elements
const container = document.getElementById("grid-container");
const containerSizePx = window.getComputedStyle(container).getPropertyValue('height');
const containerSize = containerSizePx.slice(0, containerSizePx.length-2);
const resetButton = document.getElementById("reset-button");

// Creating divs
createNewGrid();

// Reset Button
resetButton.addEventListener("click", () => {
    gridSideSize = prompt("Please enter grid column size:", gridSideSize);
    if (gridSideSize == null) {
        return;
    };
    createNewGrid();
});

// Functions
function createNewGrid() {
    // Clear Existing Grid
    document.querySelectorAll('.gridCell').forEach(i => i.remove());

    // Container Math
    const gridSize = gridSideSize ** 2;
    let gridCellSize = containerSize / gridSideSize;
    container.style.width = containerSizePx;

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

        container.appendChild(gridCell);
    }
};