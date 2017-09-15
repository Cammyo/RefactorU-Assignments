r = process.argv[2]
g = process.argv[3]
b = process.argv[4]

function luminosityFunc(r,g,b){
  luminosity = 0.2126*r + 0.7152*g + 0.0722*b
  return luminosity
}

function luminosityNum(){
  console.log(luminosity)
}

function luminosityBrightness(){
  if(luminosity > 155){
    console.log("light")
  }else{
    console.log("dark")
  }
}

module.exports = {
  luminosityFunc : luminosityFunc,
}