const chai = require('chai');
const expect = chai.expect; // we are using the "expect" style of Chai
const Robot = require('../app/models/Robot');
const processInput = require('../app/controllers/main').processInput;

const CONSTANTS = require('../constants');

describe('"PLACE" will put the Robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST', function () {
    let PLACE_validInput = 'place 3,2,NORTH';
    let PLACE_invalidXPosition = 'place 6,0,NORTH';
    let PLACE_invalidYPosition = 'place 0,6,NORTH';
    let PLACE_invalidOrientation = 'place 0,6,SOUTHWEST';
    let PLACE_invalidInput = 'place';
    let PLACE_validResponse = new Robot(3, 2, CONSTANTS.NORTH);
    console.log('vaaaaaaaaaa',PLACE_validResponse);
    it('"PLACE" command should set the Robot on the table if x,y and orientation is valid', function () {
        let robot = new Robot();
        let result = processInput(robot, PLACE_validInput);
        expect(result).to.deep.equal(PLACE_validResponse);
    });

    it('"PLACE" command should return false if orientation is invalid', function () {
        let robot = new Robot();
        let result = processInput(robot, PLACE_invalidXPosition);
        expect(result).to.equal(false);
    });

    it('"PLACE" command should return false if x position is invalid (less than 0 or more than 4)', function () {
        let robot = new Robot();
        let result = processInput(robot, PLACE_invalidYPosition);
        expect(result).to.equal(false);
    });

    it('"PLACE" command should return false if y position is invalid (less than 0 or more than 4)', function () {
        let robot = new Robot();
        let result = processInput(robot, PLACE_invalidOrientation);
        expect(result).to.equal(false);
    });

    it('"PLACE" command should return false the command is not valid', function () {
        let robot = new Robot();
        let result = processInput(robot, PLACE_invalidInput);
        expect(result).to.equal(false);
    });
});

describe('"LEFT" and "RIGHT" will rotate the robot 90 degrees in the specified direction', function () {
    let TURN_LEFT_validInput = 'LEFT';
    let TURN_RIGHT_validInput = 'RIGHT';
    it('"LEFT" command should set the Robot orientation to left', function () {
        let validRobot = new Robot(3, 2, CONSTANTS.NORTH);
        let validResponse_TURN_LEFT = new Robot(3, 2, CONSTANTS.WEST);

        let result = processInput(validRobot, TURN_LEFT_validInput);

        expect(result).to.deep.equal(validResponse_TURN_LEFT);
    });

    it('"RIGHT" command should set the Robot orientation to right', function () {
        let validRobot = new Robot(3, 2, CONSTANTS.NORTH);
        let validResponse_TURN_RIGHT = new Robot(3, 2, CONSTANTS.EAST);

        let result = processInput(validRobot, TURN_RIGHT_validInput);

        expect(result).to.deep.equal(validResponse_TURN_RIGHT);
    });
});

describe('"MOVE" will move the toy robot one unit forward in the direction it is', function () {
    let MOVE_validInput = 'MOVE';

    it('"MOVE" command will move toy robot one unit forward if the one unit forward is valid (on the table)', function () {
        let validRobot = new Robot(3, 2, CONSTANTS.NORTH);
        let validResponse_MOVE = new Robot(3, 3, CONSTANTS.NORTH);
        let result = processInput(validRobot, MOVE_validInput);

        expect(result).to.deep.equal(validResponse_MOVE);
    });
    
    it('"MOVE" command will not move toy robot one unit forward if one unit forward is invalid(out of table)', function () {
        let validRobot = new Robot(3, 4, CONSTANTS.NORTH);
        let invalidResponse_MOVE = validRobot; //robot wont move
        let result = processInput(validRobot, MOVE_validInput);

        expect(result).to.deep.equal(invalidResponse_MOVE);
    });
});

describe('"REPORT" will announce the X,Y and F of the robot.', function () {
    let REPORT_validInput = 'REPORT';

    it('"REPORT" command will announce if robot is on the table.', function () {
        let validRobot = new Robot(3, 4, CONSTANTS.NORTH);
        let result = processInput(validRobot, REPORT_validInput);
        console.log(result);
        expect(result).to.deep.equal(true);
    });

    it('"REPORT" command will return false if the robot is not on the table.', function () {
        let validRobot = new Robot();
        let result = processInput(validRobot, REPORT_validInput);
        expect(result).to.deep.equal(false);
    });
});