
const CONSTANTS = require('../../constants');

class Robot {
    constructor(xPosition, yPosition, orientation) {
        this.xPosition = xPosition ? parseInt(xPosition) : null;
        this.yPosition = yPosition ? parseInt(yPosition) : null;
        this.orientation = CONSTANTS.ORIENTATION.includes(orientation)? parseInt(orientation) : null;
    }
    setOrientation(orientationInput){
        switch(orientationInput){
        case 'NORTH':
            this.orientation = CONSTANTS.NORTH;
            break;
        case 'EAST':
            this.orientation = CONSTANTS.EAST;
            break;
        case 'SOUTH':
            this.orientation = CONSTANTS.SOUTH;
            break;
        case 'WEST':
            this.orientation = CONSTANTS.WEST;
            break;
        default:
            console.log('Robot facing at invalid direction');
        }
    }
    setXPosition(positionInput){
        if(positionInput < 0  || positionInput > CONSTANTS.TABLE_X_MAX-1){
            console.log('Invalid X Position, retry');
        }else{
            this.xPosition = positionInput;
        }
    }
    setYPosition(positionInput){
        if(positionInput < 0  || positionInput > CONSTANTS.TABLE_Y_MAX-1){
            console.log('Invalid Y Position, retry');
        }else{
            this.yPosition = positionInput;
        }
    }
    place(params){
        this.setXPosition(parseInt(params[0]));
        this.setYPosition(parseInt(params[1]));
        this.setOrientation(params[2]);
        if(this.checkRobot()){
            return this;
        }
        else{
            return false;
        }
    }
    turnLeft(){
        let newOrientation = null;
        if(this.orientation != null){
            newOrientation = this.orientation - 1;
            if(newOrientation < 0){
                newOrientation = CONSTANTS.ORIENTATION[CONSTANTS.ORIENTATION.length-1];
            }
            this.orientation = newOrientation;
        }
        return this;
    }
    turnRight(){
        let newOrientation = null;
        if(this.orientation != null){
            newOrientation = this.orientation + 1;
            if(newOrientation >= CONSTANTS.ORIENTATION.length){
                newOrientation = CONSTANTS.ORIENTATION[0];
            }
            this.orientation = newOrientation;
        }
        return this;
    }
    move() {        
        switch(this.orientation){
        case CONSTANTS.NORTH:
            this.setYPosition(this.yPosition+1);
            break;
        case CONSTANTS.EAST:
            this.setXPosition(this.xPosition+1);
            break;
        case CONSTANTS.SOUTH:
            this.setYPosition(this.yPosition-1);
            break;
        case CONSTANTS.WEST:
            this.setXPosition(this.xPosition-1);
            break;
        }
        return this;
    }
    getReport() {
        if(this.orientation!==null){
            console.log(`Robot position: ${this.xPosition},${this.yPosition},${CONSTANTS.TEXT_ORIENTATION[this.orientation]}`);
            return true;
        }else{
            console.log('No robot on the table, place the robot');
            return false;
        }
    }
    checkRobot(){
        if(this.xPosition === null || this.yPosition === null || this.orientation === null  ){
            return false;
        }
        else{
            return true;
        }
    }
}

module.exports = Robot;