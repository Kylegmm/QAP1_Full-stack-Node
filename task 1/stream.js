const fs = require('fs');
const path = require('path');

// Create a readable stream from 'task1_step2a.txt'
let readableStream = fs.createReadStream(path.join(__dirname, 'task1_step2a.txt'), 'utf8');

// Create a writable stream to 'output.txt'
let writableStream = fs.createWriteStream(path.join(__dirname, 'output.txt'));

// Event listener for when data is read from the input file
readableStream.on('data', function(chunk) {
    console.log('Reading some data:');
    console.log(chunk);

    // Writing the chunk to the output file
    writableStream.write(chunk);
});

// Event listener for when there is no more data to read
readableStream.on('end', function() {
    console.log('Finished reading data.');
});

// Event listener for when the writing is done
writableStream.on('finish', function() {
    console.log('Finished writing data.');
});

// In case of reading errors
readableStream.on('error', function(err) {
    console.error('Error reading file:', err);
});

// In case of writing errors
writableStream.on('error', function(err) {
    console.error('Error writing file:', err);
});
