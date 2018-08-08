
const S = require('string');

const COMMAND_PLACE = "PLACE";
const COMMAND_MOVE = "MOVE";

const LEFT = 0;
const RIGHT = 1;
const COMMAND_TURN_LEFT = "LEFT";
const COMMAND_TURN_RIGHT = "RIGHT";
const COMMAND_REPORT = "REPORT";

module.exports = {
    processInput : (object, input) => {
        input = input.toString().trim().toUpperCase();
        input = S(input).splitLeft(' ');
      
        switch(input[0]){
          case COMMAND_PLACE:
            let params = S(input[1]).splitLeft(',');
            return object.place(params);
            break;
          case COMMAND_MOVE:
            object.move();
            break;
          case COMMAND_TURN_LEFT:
            object.turnLeft();
            break;
          case COMMAND_TURN_RIGHT:
            object.turnRight();
            break;
        }
    }
  };