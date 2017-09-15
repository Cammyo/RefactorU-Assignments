function addNumbers(str){
  var isNumber = function(n) { return !isNaN(parseFloat(n)) && isFinite(n); };
  var add = function(a,b) { return a + b; }
  var numStr = [];
  for (var i = 0; i < str.length; i++) {
    if( isNumber( str[i] ) ){
      numStr.push( parseInt( str[i] ) );
    }
  }
  console.log( numStr.reduce( add ) );
}

addNumbers("55Hello5");
addNumbers("1337 5P34K");


function longestWord(str){
  
}