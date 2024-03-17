import {generateMap} from "./src/mapGeneration.js";
import {Levels} from "./src/level.js";
import {moove} from "./src/moove.js"
import {checkBox} from "./src/checkBox.js";


//Rules button import
const rulesButton = document.getElementById("rules-button");
const rulesModal = document.getElementById("rules-modal");
const closeButton = document.querySelector(".close");

//Rules display
rulesButton.addEventListener("click", () => {
    rulesModal.style.display = "block";
});
closeButton.addEventListener("click", () => {
    rulesModal.style.display = "none";
});
window.addEventListener("click", (event) => {if (event.target === rulesModal) {
    rulesModal.style.display = "none";
}
});

//reset button
let globalLevel = 0;
const resetButton = document.querySelector(".button");
resetButton.addEventListener("click", (event) => {
    game(globalLevel);
});

//Update function for progress bar
function updateProgressBar(currentLevel, maxLevel) {
    const levelText = `${currentLevel} / ${maxLevel}`;
    const levelWidth = (currentLevel / maxLevel) * 100;
    const levelElement = document.querySelector('.level');
    const levelTextElement = document.querySelector('.level-text');

    levelElement.style.width = `${levelWidth}%`;
    levelTextElement.textContent = levelText;
}

//Update function for step counter
function updateStepCounter(nbStep){
    const stepCounter = document.getElementById("step-counter");
    stepCounter.textContent = `Steps: ${nbStep}`;
}


//Main function
const game = (level = 0) => {
    //All variable initialisation
    let nbStep = 0;
    let currentLevel = level;
    globalLevel = currentLevel;
    let currentMap = JSON.parse(JSON.stringify(Levels[currentLevel]));
    const maxLevel = Levels.length;

    //Display original game state
    generateMap(currentMap, currentLevel);
    updateProgressBar(currentLevel, maxLevel);

    //Check for arrow keys input
    document.addEventListener("keydown", event => {
        if(event.key.startsWith("Arrow")){
            switch (event.key){
                case "ArrowUp" :
                    currentMap = moove("up", currentMap, currentLevel);
                    nbStep++
                    updateStepCounter(nbStep);
                    generateMap(currentMap, currentLevel);
                    break;
                case "ArrowDown" :
                    currentMap = moove("down", currentMap, currentLevel);
                    nbStep++
                    updateStepCounter(nbStep);
                    generateMap(currentMap, currentLevel);
                    break;
                case "ArrowLeft" :
                    currentMap = moove("left", currentMap, currentLevel);
                    nbStep++
                    updateStepCounter(nbStep);
                    generateMap(currentMap, currentLevel);
                    break;
                case "ArrowRight" :
                    currentMap = moove("right", currentMap, currentLevel);
                    nbStep++
                    updateStepCounter(nbStep);
                    generateMap(currentMap, currentLevel);
                    break;
            }
            //Check victory
            if (checkBox(currentMap, currentLevel)){
                currentLevel += 1;
                nbStep = 0;
                updateStepCounter(nbStep);
                game(currentLevel);
            }
        }
    })
}
game();