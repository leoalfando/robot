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
$ node app
```

### Testing

To test the functionality the dependencies and devDependencies and start the server.

```sh
$ mocha ./tests/robottest
```