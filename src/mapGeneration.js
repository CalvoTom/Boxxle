const images = {
    //Image path for each Level array value
    '0': 'null',
    '1': './img/Wall.jpg',
    '2': './img/box.jpg',
    '3': './img/player0.png',
    '4': './img/floor_point.png',
};

export function generateMap(level) {
    const mapContainer = document.getElementById('map');

    //remove last map state
    while (mapContainer.firstChild) {
        mapContainer.removeChild(mapContainer.firstChild);
    }

    //Create cell for non null element
    level.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            if (cell !== 0) {
                const image = images[cell.toString()];
                cellElement.style.backgroundImage = `url(${image})`;
                if (cell === 3){
                    cellElement.id = "player";
                }
            }

            mapContainer.appendChild(cellElement);
        });
    });
}