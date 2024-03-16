import {Levels} from "./level.js";

export function checkBox(currentMap, currentLevel){
    const currentMapOriginState = Levels[currentLevel];
    console.log(currentMap)
    console.log(currentLevel)
    for (let i = 0; i < currentMapOriginState.length; i++) {
        for (let j = 0; j < currentMapOriginState[i].length; j++) {
            if (currentMapOriginState[i][j] === 4) {
                if (currentMap[i][j] !== 2) {
                    console.log("here")
                    return false;
                }
            }
        }
    }
    return true;
}