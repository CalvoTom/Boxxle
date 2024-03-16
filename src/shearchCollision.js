export function searchCollision(map, playerPositionX, playerPositionY) {
    //check different type of collision
    if (map[[playerPositionX][playerPositionY]] === 0 || map[[playerPositionX][playerPositionY]] === 4){
        return 0;//no collision
    } else if (map[[playerPositionX][playerPositionY]] === 1){
        return 1;//wall collision
    } else if (map[[playerPositionX][playerPositionY]] === 2){
        return 2;//box collision
    }else if (map[[playerPositionX][playerPositionY]] === 3){
        return 3;//floor with point collision
    }
}