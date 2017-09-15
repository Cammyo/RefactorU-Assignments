// FIND IF NUM
var isNumber = function(n) { return !isNaN(parseFloat(n)) && isFinite(n); };
//  PHONE NUM
var phoneNum = prompt("Input a valid phone number: \nNo Spamerino");
if(phoneNum[3] === "-" && phoneNum[7] === "-" && isNumber(phoneNum.substring(0,3)) && isNumber(phoneNum.substring(4,7)) && isNumber(phoneNum.substring(8,13))){
    alert(true)
}
else{
  alert("Incorrect Format\n Must be: ###-###-####")
}
// BIRTH DATE
var birthDate = prompt("Input a valid birth date: ##/##/## \nNo identity stealingerino");
if( isNumber(birthDate.substring(0,2)) && isNumber(birthDate.substring(3,5)) && isNumber(birthDate.substring(6,8)) && birthDate[2] === "/" && birthDate[5] === "/"){
  alert(true)
}
else{
  alert("Incorrect Format\n Must be: '##/##/##'")
}
// POSTAL CODE
var postalCode = prompt("Input postal code: ##### / #####-####");
if(isNumber(postalCode)){
  alert(true)
}
else if(isNumber(postalCode.substring(0,5)) && isNumber(postalCode.substring(7,11)) && postalCode[5] === "-"){
  alert(true)
}
else{
  alert("Incorrect Format\n Must be: ##### / #####-#### ")
}
// STATE ABBREV.
var state = prompt("Input a valid state abbreviation:\n Capitalized Ex: CO")
if(state == state.toUpperCase()){
  alert(true)
}
else{
  alert("Incorrect Format\n Must be: Capitalized Ex: CO")
}
// MARRIED
var married = prompt("Input if you're married\n Ex: 'Yes' / 'No'")
if(married.toUpperCase() === "yes".toUpperCase() || married.toUpperCase() === "no".toUpperCase()){
  alert(true)
}
else{
  alert("Incorrect Format\n Must be: 'Yes' / 'No'")
}