// Import the 'events' module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Listen for the 'add' event
eventEmitter.on('add', (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
});

// Listen for the 'multiply' event
eventEmitter.on('multiply', (a, b) => {
  console.log(`${a} * ${b} = ${a * b}`);
});

// Function to add two numbers and emit an 'add' event
function addNumbers(a, b) {
  console.log('Adding numbers...');
  eventEmitter.emit('add', a, b);
}

// Function to multiply two numbers and emit a 'multiply' event
function multiplyNumbers(a, b) {
  console.log('Multiplying numbers...');
  eventEmitter.emit('multiply', a, b);
}

// Perform the operations
addNumbers(5, 7);
multiplyNumbers(6, 9);
