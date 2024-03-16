import {generateMap} from "./mapGeneration.js";
import {Levels} from "./level.js ";
import {moove} from "./moove.js"

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
    document.addEventListener("keydown", event => {
        if(event.key.startsWith("Arrow")){
            switch (event.key){
                case "ArrowUp" :
                    console.log("up")
                    currentMap = moove("up", currentMap);
                    generateMap(currentMap);
                    break;
                case "ArrowDown" :
                    console.log("down")
                    currentMap = moove("down", currentMap);
                    generateMap(currentMap);
                    break;
                case "ArrowLeft" :
                    console.log("left")
                    currentMap = moove("left", currentMap);
                    generateMap(currentMap);
                    break;
                case "ArrowRight" :
                    console.log("right")
                    currentMap = moove("right", currentMap);
                    generateMap(currentMap);
                    break;
            }
        }
    })
}
draw();