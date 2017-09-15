var colorutil = require('./color-util.js')

var luminosity = colorutil.luminosityFunc(process.argv[2], process.argv[3], process.argv[4])

console.log(luminosity)