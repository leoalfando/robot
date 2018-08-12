# Toy Robot

##### Description
- The application is a simulation of a toy robot moving on a square tabletop,
  of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be
  prevented from falling to destruction. Any movement that would result in the
  robot falling from the table must be prevented, however further valid
  movement commands must still be allowed.

### Tech

This toy robot app uses a number of open source:

* [node.js] - evented I/O for the backend
* [Chai] - the test the functionality
* [Mocha] - test runner
* [GitHub] - repository

### Installation

Toy Robot apps requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd robot
$ npm install -d
```

### Testing

To test the functionality the dependencies and devDependencies and start the server.

```sh
$ npm test
```

### Usages

To start the application.

```sh
$ npm start
```

Commands:
1. PLACE : will put the toy robot on the table in position X,Y and facing NORTH,
  SOUTH, EAST or WEST.
example : 
```sh
$ PLACE 0,0,NORTH
```

2. MOVE : move the toy robot one unit forward in the direction it is
  currently facing.
example : 
```sh
$ PLACE 0,0,NORTH 
#then
$ MOVE
#will re-position toy robot to 0,1,NORTH
```
3. LEFT and RIGHT: will rotate the robot 90 degrees in the specified direction
  without changing the position of the robot.
example: 
```sh
$ PLACE 0,0,NORTH 
#then
$ LEFT
#will re-position toy robot to 0,0,WEST
```

3 REPORT: will announce the X,Y and F of the robot.
example:
```sh
$ PLACE 1,2,EAST
$ MOVE
$ MOVE
$ LEFT
$ MOVE
$ REPORT
```
will show the user robot position (3,3,NORTH)

