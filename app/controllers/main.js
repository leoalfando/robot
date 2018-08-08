const COMMAND_PLACE = "PLACE";
const COMMAND_MOVE = "MOVE";

const COMMAND_TURN_LEFT = "LEFT";
const COMMAND_TURN_RIGHT = "RIGHT";
const COMMAND_REPORT = "REPORT";

module.exports = {
    processInput : (object, input) => {
        input = input.toString().trim().toUpperCase();
        input = input.split(" ");

        switch(input[0]){
          case COMMAND_PLACE:
            let params = input[1].split(',');
            return object.place(params);
            break;
          case COMMAND_MOVE:
            object.move();
            break;
          case COMMAND_TURN_LEFT:
            return object.turnLeft();
            break;
          case COMMAND_TURN_RIGHT:
            return object.turnRight();
            break;
        }
    }
  };