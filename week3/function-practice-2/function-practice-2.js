function getName(obj){
  console.log(obj.name)
}
getName({ name: 'Luisa', age: 25 });
console.log('')
// 
function totalLetters(str){
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    counter += str[i].length;
  }
  console.log(counter);
}
totalLetters(['javascript', 'is', 'awesome']);
totalLetters(['what', 'happened', 'to', 'my', 'function']);
console.log('')
// 
function keyValue(arg1, arg2){
  var obj = {};
  obj[arg1] = arg2;
  return obj;
}
console.log(keyValue('city', 'Denver'));
console.log('')
// 
function negativeIndex(arr, num){
  return arr[parseInt(arr.length + num)]
}
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));
console.log('')
// 
function removeM(str){
  var strSplit = str.split('m');
  strSplit = strSplit.join('');
  return strSplit
}
console.log(removeM('family'));
console.log(removeM('memory'));
console.log('')
// 
function printObject(obj){
  for (var i in obj) {
    console.log(i + " is " + obj[i]);
  }

}
printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });
console.log('')
//
function vowels(str){
  var vowels = [];
  for (var i = 0; i < str.length; i++) {
    if(str.charAt(i)=="a" || str.charAt(i)=="e" ||
       str.charAt(i)=="i" || str.charAt(i)=="o" ||
       str.charAt(i)=="u"){
      vowels.push(str.charAt(i));
    }
  }
  return vowels;
}
console.log(vowels('alabama'))
console.log(vowels('What evil odd ducks!'))
console.log('')
// 
function twins(arr){
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=2) {
    if(arr[i] == arr[i+1]){
      arr2.push(arr[i], arr[i+1])
    }
  }
  if(arr.length === arr2.length){
    return true
  }else{
    return false
  }
}
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']))
console.log(twins(['a', 'a', 'b', 'z']))
console.log(twins(['a', 'a', undefined]))
console.log('')
// 
function or(arr){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]===true){
      return true
    }
  }
  return false
}
console.log(or([false, false, true, false]))
console.log(or([false, false, false]))
console.log(or([]))
// 
function unique(arr){
  return (new Set(arr))
}
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
console.log(unique(['todd', 'avery', 'maria', 'avery']))




