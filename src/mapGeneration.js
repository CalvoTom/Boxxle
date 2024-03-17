import {Levels} from "./level.js";

const images = {
    //Image path for each Level array value
    '0': 'null',
    '1': './img/wall.jpg',
    '2': './img/box.jpg',
    '3': './img/player_standing.png',
    '4': './img/floor_point.png',
};

export function generateMap(currentMap, currentLevel) {
    const mapContainer = document.getElementById('map');
    const currentMapOriginState = Levels[currentLevel];

    //remove last map state
    while (mapContainer.firstChild) {
        mapContainer.removeChild(mapContainer.firstChild);
    }


    //Create cell for non null element
    currentMap.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            if (cell !== 0) {
                const image = images[cell.toString()];
                if (currentMapOriginState[rowIndex][cellIndex] === 4 && cell === 2) {
                    cellElement.style.backgroundImage = `url(./img/dark_box.png)`;
                } else {
                    cellElement.style.backgroundImage = `url(${image})`;
                }
            }

            mapContainer.appendChild(cellElement);
        });
    });
}