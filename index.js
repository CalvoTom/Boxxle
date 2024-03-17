import {generateMap} from "./src/mapGeneration.js";
import {Levels} from "./src/level.js";
import {moove} from "./src/moove.js"
import {checkBox} from "./src/checkBox.js";

//Global variable
let nbStep = 0;
let currentLevel = 0;
let currentMap = JSON.parse(JSON.stringify(Levels[0]));
const maxLevel = Levels.length;


//Rules button import
const rulesButton = document.getElementById("rules-button");
const rulesModal = document.getElementById("rules-modal");
const closeButton = document.querySelector(".close");

//Event listener
//rules
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
//Keystroke
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        switch (event.key){
            case "ArrowUp" :
                currentMap = moove("up", currentMap, currentLevel);
                nbStep++
                break;
            case "ArrowDown" :
                currentMap = moove("down", currentMap, currentLevel);
                nbStep++
                break;
            case "ArrowLeft" :
                currentMap = moove("left", currentMap, currentLevel);
                nbStep++
                break;
            case "ArrowRight" :
                currentMap = moove("right", currentMap, currentLevel);
                nbStep++
                break;
        }
    }
});


//Reset button
let globalLevel = 0;
const resetButton = document.querySelector(".button");
resetButton.addEventListener("click", (event) => {
    currentMap = JSON.parse(JSON.stringify(Levels[currentLevel]));
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

//Update function for player
let lastFrame = 0;
function updatePlayer(){
    lastFrame++;
    if (lastFrame > 3){
        lastFrame = 0;
    }
    const cellPLayer = document.querySelector("#player");
    if (cellPLayer === null) {
        console.log("ERROR: No player")
        window.close();
    }else {
        cellPLayer.style.backgroundImage = `url(./img/player${lastFrame}.png)`;
    }
}

//Game loop
generateMap(currentMap, currentLevel);
function gameLoop(){
    //Update map and counter
    updateProgressBar(currentLevel, maxLevel);
    updateStepCounter(nbStep);
    generateMap(currentMap, currentLevel);
    //Update player animation
    updatePlayer();
    //Test victory
    if (checkBox(currentMap, currentLevel)) {
        currentLevel += 1;
        if (currentLevel === maxLevel){
            // Redirect to victory page
            window.location.replace("victory.html");
        }else{
            nbStep = 0;
            currentMap = JSON.parse(JSON.stringify(Levels[currentLevel]));
        }
    }
    setTimeout(() => {
        window.requestAnimationFrame(gameLoop);
    }, 100);
}
window.requestAnimationFrame(gameLoop);