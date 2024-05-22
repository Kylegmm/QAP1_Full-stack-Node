const cowsay = require("cowsay");

console.log(cowsay.say({text: 'howdy pardner!'}));

console.log(cowsay.think( {text: 'what is for dinner', e: 'O^O'}))

function get_cows(error, cow_names) {
    if (error) {
        console.log(error)
    }
    else if (cow_names) {
        console.log(`Number of cows available: ${cow_names.length}`);
    }
}

cowsay.list(get_cows);