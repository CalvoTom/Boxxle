import {generateMap} from "./src/mapGeneration.js";
import {Levels} from "./src/level.js";
import {moove} from "./src/moove.js"
import {checkBox} from "./src/checkBox.js";

const GRID_WIDTH = 50;
const GRID_HEIGHT = 25;
const fps = 10
const keys = {
    37: 'left',
    39: 'right',
    38: 'up',
    40: 'down'
}

const rulesButton = document.getElementById("rules-button");
const rulesModal = document.getElementById("rules-modal");

rulesButton.addEventListener("click", () => {
    rulesModal.style.display = "block";
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
    rulesModal.style.display = "none";
});

window.addEventListener("click", (event) => {if (event.target === rulesModal) {
    rulesModal.style.display = "none";
}
});

const draw = (level = 0) => {
    //Charge map level
    let currentLevel = level;
    let currentMap = JSON.parse(JSON.stringify(Levels[currentLevel]));
    console.log(currentMap);
    generateMap(currentMap);

    const button = document.querySelector("button");

    button.addEventListener("click", (event) => {
        draw(currentLevel);
        console.log("le button marche")
    });

    //Check for arrow keys input
    document.addEventListener("keydown", event => {
        if(event.key.startsWith("Arrow")){
            switch (event.key){
                case "ArrowUp" :
                    currentMap = moove("up", currentMap, currentLevel);
                    generateMap(currentMap);
                    break;
                case "ArrowDown" :
                    currentMap = moove("down", currentMap, currentLevel);
                    generateMap(currentMap);
                    break;
                case "ArrowLeft" :
                    currentMap = moove("left", currentMap, currentLevel);
                    generateMap(currentMap);
                    break;
                case "ArrowRight" :
                    currentMap = moove("right", currentMap, currentLevel);
                    generateMap(currentMap);
                    break;
            }
            if (checkBox(currentMap, currentLevel)){
                currentLevel += 1;
                draw(currentLevel);
            }
        }
    })
}
draw();