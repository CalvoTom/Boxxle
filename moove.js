import {Levels} from "./level";

let mapCopy = JSON.parse(JSON.stringify(Levels[0]));

function characterPosX(map) {
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

function characterPosY(map) {
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

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        switch (event.key){
            case "ArrowUp" :
                moove("up")
                console.log("je monte !")
                break;
            case "ArrowDown" :
                moove("down")
                console.log("je descend !")
                break;
            case "ArrowLeft" :
                moove("left")
                console.log("je recule !")
                break;
            case "ArrowRight" :
                moove("right")
                console.log("j'avance !")
                break;
        }
    }
})

function moove(direction){
    let playerPositionX = characterPosX()
    let playerPositionY = characterPosY()

    switch (direction){
        case "up" :
            mapCopy[[playerPositionX] [playerPositionY]] = 0;
            mapCopy[[playerPositionX-1] [playerPositionY]] = 3;
            playerPositionX -= 1;
            break;
        case "down" :
            mapCopy[[playerPositionX] [playerPositionY]] = 0;
            mapCopy[[playerPositionX+1] [playerPositionY]] = 3;
            playerPositionX += 1;
            break;
        case "left" :
            mapCopy[[playerPositionX] [playerPositionY]] = 0;
            mapCopy[[playerPositionX] [playerPositionY-1]] = 3;
            playerPositionY -= 1;
            break;
        case "right" :
            mapCopy[[playerPositionX] [playerPositionY]] = 0;
            mapCopy[[playerPositionX] [playerPositionY+1]] = 3;
            playerPositionY += 1;
            break;
    }
}