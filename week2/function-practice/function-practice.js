

console.log("_______________________ tripleFive")
// tripleFive
var tripleFive = function(){
  for (var i = 0; i < 3; i++) {
    console.log("Five!");
  }
}
tripleFive();
console.log("_______________________ lastLetter")
// lastLetter
var lastLetter = function(str){
  console.log( str[str.length -1] );
}
lastLetter("pineapple");
console.log("_______________________ negate")
// negate
var negate = function(int){
  console.log("-" + int);
}
negate(20);
console.log("_______________________ toArray")
// toArray
var toArray = function(uno, dos, tres){
  var array = [];
  array.push(uno);
  array.push(dos);
  array.push(tres);
  console.log(array)
}
toArray(1,2,6);
console.log("_______________________ startsWithA")
// startsWithA
var startsWithA = function(str){
  if(str[0] === "a"){
    console.log(str, true);
  }
  else{
    console.log(str, false);
  }
}
startsWithA("aardvark");
startsWithA("bear");
console.log("_______________________ excite")
// excite
var excite = function(str){
  console.log(str + "!!!")
}
excite("Yes");
console.log("_______________________ sun")
// sun
var sun = function(str){
  for (var i = 0; i < str.length; i++){
    var z = i;
    var sunTrue = false
    if(str.substring(i, z + 3) === "sun"){
      sunTrue = true
    }
    if(sunTrue === true){
      console.log(str,true)
      break
    }
  }

}
sun("sundries");
sun("asunder");
sun("trebuchet");
console.log("_______________________ tiny")
// tiny
var tiny = function(num){
  if(num > 0 && num < 1){
    console.log(true)
  }
  else{
    console.log(false)
  }
}
tiny(0.3)
tiny(14)
tiny(-5)
console.log("_______________________ getSeconds")
// getSeconds
var getSeconds = function(str){
  if(str[2] === ":" && str.substring(0,2) !== isNaN && str.substring(3,6) !== isNaN ){
    console.log(parseInt(str.substring(0,2)*60)+parseInt(str.substring(3,6)))
  }else{
    console.log("Incorrect Format: 'MM:SS'")
  }
}
getSeconds("01:30")
getSeconds("10:25")





