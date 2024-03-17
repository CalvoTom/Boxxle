import {generateMap} from "./mapGeneration.js";
import {Levels} from "./level.js";

const GRID_WIDTH = 50;
const GRID_HEIGHT = 25;
const fps = 10
const keys = {
    37: 'left',
    39: 'right',
    38: 'up',
    40: 'down'
}
const draw = () => {
    let currentLevel = 0;
    let currentMap = JSON.parse(JSON.stringify(Levels[currentLevel]));
    generateMap(currentMap);

    window.requestAnimationFrame(gameLoop);
    const cellPLayer = document.querySelector("#player");
    let frame = 0;

    function gameLoop(){
        frame = (frame + 1) % 3;
        cellPLayer.style.backgroundImage = `url(./img/player${frame}.png`;
        setTimeout(() => {
            window.requestAnimationFrame(gameLoop);
        }, 100);
    }
}
draw();