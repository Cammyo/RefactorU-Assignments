// HELLO WORLD

// console.log("HELLO WORLD")
//
// Baby Steps

// var total = 0;
// for (var i = 2; i < process.argv.length; i++) {
//    total = total + Number(process.argv[i])
// }
// console.log(total)
//
// First I/O

// var fs = require('fs')
//https://codeanywhere.com/editor/# var filename = process.argv[2] 
// file = fs.readFileSync(filename, 'utf8').split('\n').length - 1
// console.log(file);
// 
// First Async I/O

var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, 'utf8', (err,data) =>{console.log(data.split('\n').length - 1)})
