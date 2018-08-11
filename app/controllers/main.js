const COMMAND_PLACE = 'PLACE';
const COMMAND_MOVE = 'MOVE';

const COMMAND_TURN_LEFT = 'LEFT';
const COMMAND_TURN_RIGHT = 'RIGHT';
const COMMAND_REPORT = 'REPORT';

module.exports = {
    processInput: (object, input) => {
        input = input.toString().trim().toUpperCase();
        input = input.split(' ');
        let params = null;
        switch (input[0]) {
        case COMMAND_PLACE:
            params = input[1].split(',');
            return object.place(params);
        case COMMAND_MOVE:
            return object.move();
        case COMMAND_TURN_LEFT:
            return object.turnLeft();
        case COMMAND_TURN_RIGHT:
            return object.turnRight();
        case COMMAND_REPORT:
            return object.getReport();
        }
    }
};