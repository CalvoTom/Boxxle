import {searchCollision} from "./shearchCollision";

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

export function moove(direction, currentMap){
    const playerPositionX = characterPosX(currentMap)
    const playerPositionY = characterPosY(currentMap)

    switch (direction){
        case "up" :
            const upCollision = searchCollision(currentMap, playerPositionX-1, playerPositionY);
            currentMap[playerPositionX][playerPositionY] = 0;
            currentMap[playerPositionX-1][playerPositionY] = 3;
            break;
        case "down" :
            const downCollision = searchCollision(currentMap, playerPositionX-1, playerPositionY);
            currentMap[playerPositionX][playerPositionY] = 0;
            currentMap[playerPositionX+1][playerPositionY] = 3;
            break;
        case "left" :
            const leftCollision = searchCollision(currentMap, playerPositionX-1, playerPositionY);
            currentMap[playerPositionX][playerPositionY] = 0;
            currentMap[playerPositionX][playerPositionY-1] = 3;
            break;
        case "right" :
            const rightCollision = searchCollision(currentMap, playerPositionX-1, playerPositionY);
            currentMap[playerPositionX][playerPositionY] = 0;
            currentMap[playerPositionX][playerPositionY+1] = 3;
            break;
    }
    return currentMap;
}