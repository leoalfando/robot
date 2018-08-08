
const CONSTANTS = require('../../constants');

class Robot {
    constructor(xPosition, yPosition, orientation) {
        this.xPosition = parseInt(xPosition);
        this.yPosition = parseInt(yPosition);
        this.orientation = parseInt(orientation);
    }
    setOrientation(orientationInput){
        switch(orientationInput){
            case "NORTH":
                this.orientation = CONSTANTS.NORTH;
                break;
            case "EAST":
                this.orientation = CONSTANTS.EAST;
                break;
            case "SOUTH":
                this.orientation = CONSTANTS.SOUTH;
                break;
            case "WEST":
                this.orientation = CONSTANTS.WEST;
                break;
            default:
                throw "ReaBot facing at invalid direction";
        }
    }
    setXPosition(positionInput){
        if(positionInput < 0  || positionInput > CONSTANTS.TABLE_X_MAX-1){
            throw("Invalid X Position, retry");
        }else{
            this.xPosition = positionInput;
        }
    }
    setYPosition(positionInput){
        if(positionInput < 0  || positionInput > CONSTANTS.TABLE_Y_MAX-1){
            throw("Invalid Y Position, retry");
        }else{
            this.yPosition = positionInput;
        }
    }
    place(params){
        try {
            this.setXPosition(parseInt(params[0]));
            this.setYPosition(parseInt(params[1]));
            this.setOrientation(params[2]);
            return this;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    turnLeft(){
        console.log("do turn left");
        return true;
    }
    turnRight(){
        console.log("do turn right");
        return true;
    }
    move() {
        console.log("do move");
        return true;
    }
};

module.exports = Robot;