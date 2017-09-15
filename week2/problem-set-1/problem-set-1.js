function letterCapitalize(str){
  console.log("Before: ",str)
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }
  str = words.join(" ")
  console.log("After: ", str)
}
letterCapitalize("the quick brown fox jumps over the lazy dog")

// 

function wordCount(str) {
  var words = str.split(' ')
  console.log(words.length + " word long sentence")
}
wordCount("words and setences and paragraphs and empty pages")

// 

function prime(num){
  if(num===1){console.log(false)
  }else if(num===2){console.log(true)
  }else{
    for(var i = 2; i < num; i++){  
      if(num % i === 0){
        return false
      }
    }
    return true
  }
}
console.log(prime(15))
console.log(prime(13))