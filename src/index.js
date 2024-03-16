import {generateMap} from "./mapGeneration.js";
import {Levels} from "./level.js ";

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
    generateMap(Levels[0]);
}
draw();