const images = {
    '0': './img/box.jpg',
    '1': './img/Wall.jpg',
    '2': './img/box.jpg',
    '3': './img/player_standing.png',
    '4': './img/floor_point.png',
};

export function generateMap(level) {
    const mapContainer = document.getElementById('map');

    level.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            if (cell !== 0) {
                const image = images[cell.toString()];
                cellElement.style.backgroundImage = `url(${image})`;
            }

            mapContainer.appendChild(cellElement);
        });
    });
}