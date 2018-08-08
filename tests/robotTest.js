const chai = require('chai');
const expect = chai.expect; // we are using the "expect" style of Chai
const Robot = require('../app/models/Robot');
const processInput = require('../app/controllers/main').processInput;

const CONSTANTS = require('../constants');

describe("PLACE will put the Robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST", function() {
  let PLACE_validInput = "place 3,2,NORTH";
  let PLACE_invalidXPosition = "place 6,0,NORTH";
  let PLACE_invalidYPosition = "place 0,6,NORTH";
  let PLACE_invalidOrientation = "place 0,6,SOUTHWEST";
  let PLACE_validResponse = new Robot(3, 2, CONSTANTS.NORTH);
  
  it(`"PLACE" command should set the Robot on the table if x,y and orientation is valid`, function() {
      let robot = new Robot();
      let result = processInput(robot, PLACE_validInput);
      expect(result).to.deep.equal(PLACE_validResponse);
  });
  
  it(`"PLACE" command should return false if orientation is invalid`, function() {
    let robot = new Robot();
    let result = processInput(robot, PLACE_invalidXPosition);
    expect(result).to.equal(false);
  });

  it(`"PLACE" command should return false if x position is invalid (less than 0 or more than 4)`, function() {
    let robot = new Robot();
    let result = processInput(robot, PLACE_invalidYPosition);
    expect(result).to.equal(false);
  });

  it(`"PLACE" command should return false if y position is invalid (less than 0 or more than 4)`, function() {
    let robot = new Robot();
    let result = processInput(robot, PLACE_invalidOrientation);
    expect(result).to.equal(false);
  });

});

describe("TURN LEFT/RIGHT will turn the Robot orientation", function() {
  let validRobot = new Robot(3, 2, CONSTANTS.NORTH);
  let TURN_LEFT_validInput = "LEFT";
  let TURN_RIGHT_validInput = "RIGHT";
  it(`"LEFT" command should set the Robot on the table if x,y and orientation is valid`, function() {
    let result = processInput(validRobot, TURN_LEFT_validInput);
    
    expect(result).to.deep.equal(true);
  });
  
  it(`"RIGHT" command should set the Robot on the table if x,y and orientation is valid`, function() {
    let result = processInput(validRobot, TURN_RIGHT_validInput);
    
    expect(result).to.deep.equal(true);
  });
});