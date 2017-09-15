function alphabetSoup(str){
  var newStr = str.split("").sort().join("");
  console.log(newStr);
}

alphabetSoup("hello");
alphabetSoup("thequickbrownfoxjumpsoverthelazydog");

function vowelCount(str){
  var counter = 0;
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      counter++
    }
  }
  console.log("'" + str + "'" + " has " + counter + " vowels.");
}

vowelCount("All cows eat grass");
vowelCount("how many vowels is this");


