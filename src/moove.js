import {searchCollision} from "./shearchCollision.js";
import {Levels} from "./level.js";

function characterPosY(map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 3) {
                return j;
            }
        }
    }
    console.log("ERROR : position not found")
    return -1
}

function characterPosX(map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 3) {
                return i;
            }
        }
    }
    console.log("ERROR : position not found")
    return -1
}

export function moove(direction, currentMap, currentLevel){
    const playerPositionX = characterPosX(currentMap)
    const playerPositionY = characterPosY(currentMap)

    switch (direction){
        case "up" :
            const upCollision = searchCollision(currentMap, playerPositionX-1, playerPositionY);

            switch (upCollision){
                case 0:
                    currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel, playerPositionX, playerPositionY);
                    currentMap[playerPositionX-1][playerPositionY] = 3;
                    break;
                case 1:
                    break;
                case 2:
                    if (currentMap[playerPositionX-2][playerPositionY] === 0 || currentMap[playerPositionX-2][playerPositionY] === 4){
                        currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel,playerPositionX, playerPositionY);
                        currentMap[playerPositionX-1][playerPositionY] = 3;
                        currentMap[playerPositionX-2][playerPositionY] = 2;
                    }
                    break;
                case 3:
                    currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel,playerPositionX, playerPositionY);
                    currentMap[playerPositionX-1][playerPositionY] = 3;
                    break;
            }
            break;

        case "down" :
            const downCollision = searchCollision(currentMap, playerPositionX+1, playerPositionY);

            switch (downCollision){
                case 0:
                    currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel,playerPositionX, playerPositionY);
                    currentMap[playerPositionX+1][playerPositionY] = 3;
                    break;
                case 1:
                    break;
                case 2:
                    if (currentMap[playerPositionX+2][playerPositionY] === 0 || currentMap[playerPositionX+2][playerPositionY] === 4){
                        currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel,playerPositionX, playerPositionY);
                        currentMap[playerPositionX+1][playerPositionY] = 3;
                        currentMap[playerPositionX+2][playerPositionY] = 2;
                    }
                    break;
                case 3:
                    currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel,playerPositionX, playerPositionY);
                    currentMap[playerPositionX+1][playerPositionY] = 3;
                    break;
            }
            break;

        case "left" :
            const leftCollision = searchCollision(currentMap, playerPositionX, playerPositionY-1);

            switch (leftCollision){
                case 0:
                    currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel,playerPositionX, playerPositionY);
                    currentMap[playerPositionX][playerPositionY-1] = 3;
                    break;
                case 1:
                    break;
                case 2:
                    if (currentMap[playerPositionX][playerPositionY-2] === 0 || currentMap[playerPositionX][playerPositionY-2] === 4){
                        currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel,playerPositionX, playerPositionY);
                        currentMap[playerPositionX][playerPositionY-1] = 3;
                        currentMap[playerPositionX][playerPositionY-2] = 2;
                    }
                    break;
                case 3:
                    currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel,playerPositionX, playerPositionY);
                    currentMap[playerPositionX][playerPositionY-1] = 3;
                    break;
            }
            break;

        case "right" :
            const rightCollision = searchCollision(currentMap, playerPositionX, playerPositionY+1);

            switch (rightCollision){
                case 0:
                    currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel,playerPositionX, playerPositionY);
                    currentMap[playerPositionX][playerPositionY+1] = 3;
                    break;
                case 1:
                    break;
                case 2:
                    if (currentMap[playerPositionX][playerPositionY+2] === 0 || currentMap[playerPositionX][playerPositionY+2] === 4){
                        currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel,playerPositionX, playerPositionY);
                        currentMap[playerPositionX][playerPositionY+1] = 3;
                        currentMap[playerPositionX][playerPositionY+2] = 2;
                    }
                    break;
                case 3:
                    currentMap[playerPositionX][playerPositionY] = checkReplacement(currentLevel, playerPositionX, playerPositionY);
                    currentMap[playerPositionX][playerPositionY+1] = 3;
                    break;
            }
            break;
    }
    return currentMap;
}

function checkReplacement(currentLevel ,playerPositionX, playerPositionY){
    const currentMapOriginState = Levels[currentLevel];
    if (currentMapOriginState[playerPositionX][playerPositionY] === 4){
        return 4;
    }else {
        return 0;
    }
}