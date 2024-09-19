let gridSize = 16;

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector("#grid-container");
    const resizeButton = document.querySelector(".resizeButton");


    function getRandomColor() {
        let color;
        do {
            color = Math.floor(Math.random() * 16777215).toString(16);
            color = "#" + color.padStart(6, '0');
        } while (color === "#ffffff");
        return color;
    }

    function createGrid(size) {
        // Clear existing grid
        gridContainer.innerHTML = '';

        // Calculate the size of each square
        const squareSize = 400 / size;

        // Create the grid squares
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            square.classList.add("gridItem");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            const color = getRandomColor()
            // Add hover effect
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = color;
            });

            gridContainer.appendChild(square);
        }
    }

    // Initial grid creation
    createGrid(gridSize);

    // Add event listener to the button
    resizeButton.addEventListener("click", () => {
        let newSize = prompt("Enter new grid size (maximum 100):", gridSize);
        newSize = parseInt(newSize);
        if (newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            createGrid(gridSize);
        } else {
            alert("Invalid size. Please enter a number between 1 and 100.");
        }
    });
});