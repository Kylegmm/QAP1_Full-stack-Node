// Example of using console in Node.js

// Simple log message
console.log('Hello, Kyle! You are a student at keyin college. the following consoles are examples');

// Info message
console.info('Info: Heads up heres some info!.');

// Warning message
console.warn('Warning: These are not the droids you are looking for!');

// Error message
console.error('Error: UH OH, you done goofed!');

// Using console to count occurrences
console.log('Let\'s count the loops:');
for (let i = 0; i < 3; i++) {
    console.count('Loop counter');
}

// Using console to group messages
console.log('Grouped messages:');
console.group();
console.log('Message one, r2d2');
console.log('Message two, c3po');
console.groupEnd();

// Using console.time and console.timeEnd to measure time taken
console.time('Timer');
for (let i = 0; i < 1000; i++) {
}
//insert calculations here
console.timeEnd('Timer');

// Using console.table to display data in a table format
console.log('Displaying data in a table:');
console.table([
    { name: "Vader", color: "Red" },
    { name: "Obi-Wan", color: "Blue" },
    { name: "Yoda", color: "Green"}
]);

// Using console.assert for assertions
console.log('Assertion example:');
console.assert(5 > 3, 'You will not see this message');
console.assert(5 < 3, 'You will see this error because the assertion failed');
