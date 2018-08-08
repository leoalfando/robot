const stdin = process.openStdin();
const Robot = require('./app/models/Robot');
const processInput = require('./app/controllers/main').processInput;

let robot = new Robot();
stdin.addListener("data", function(input) {
    processInput(robot,input);
});

