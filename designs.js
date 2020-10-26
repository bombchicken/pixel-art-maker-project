// Select cavas
const pixelCanvas = document.getElementById('pixelCanvas');

// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', makeGrid);

// When cell is clicked set the bgColor of the cell
pixelCanvas.addEventListener('click', (event) => {
        if (event.target.nodeName === "TD") (event.target.bgColor = colorPicker.value);
    });

function makeGrid(event) {
    event.preventDefault();

    // Clear the grid
    pixelCanvas.innerHTML = "";

    // Get grid height and width
    const height = sizePicker.elements["height"].value;
    const width = sizePicker.elements["width"].value;

    // Add rows and cells to grid
    for (let row = 0; row < height; row++) {
        let tr = pixelCanvas.insertRow();
        for (let col = 0; col < width; col++) {
            tr.insertCell();
        }
    }

}