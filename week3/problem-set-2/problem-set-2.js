function firstReverse(str){
  return str.split('').reverse().join('')
}
console.log(firstReverse("Racecar"))
// 
function swapcase(str){
  str = str.split('')
  for (var i = 0; i < str.length; i++) {
    if(str[i]===str[i].toLowerCase()){
      str[i] = str[i].toUpperCase()
    }else{
      str[i] = str[i].toLowerCase()
    }
  }
  return str.join('')
}
console.log(swapcase("WoooOOooOoOooo"))
// 
// function letterCount(str){
  
// }