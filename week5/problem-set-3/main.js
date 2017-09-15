function palindrome(str){
  var str2 = "";
  str2 = str.split("").reverse().join("").toLowerCase()
  if(str === str2){
    console.log(true);
  }else{
   console.log(false);
  }
}

palindrome("racecar");
palindrome("words");

function dashInsert(num){
  var output = [];
  var sNum = "";
  sNum = num.toString().split("")
  for (var i = 0; i < sNum.length; i++){
    if(sNum[i]%2 !== 0 && sNum[i+1]%2 !== 0){
      output.push(sNum[i])
      output.push("-")
    }else{
      output.push(sNum[i])
    }
  }
  if(output[output.length - 1] === "-"){
    output.pop()
  }
  console.log(output.join(""))
}

dashInsert(45455)
dashInsert(454793)