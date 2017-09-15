// Bonus P1
// +++
var victimConfirm;
var victimCounter = 1;

var victimNames = [];
var victimPhones = [];
var victimStreets = [];

function victimInfo(){
  if(victimCounter === 1){alert("Please enter disaster victim: " + victimCounter)}
  victimNames[victimCounter - 1] = prompt("Please enter victim #" + victimCounter + "'s name.")
  victimPhones[victimCounter - 1] = prompt("Please enter victim #" + victimCounter + "'s phone #.")
  victimStreets[victimCounter - 1] = prompt("Please enter victim #" + victimCounter + "'s street.")
  victimCounter++
  victimConfirm = confirm("Enter another victim?\nOk = Yes\nCancel = No")
  switch(victimConfirm){
    case true:
      victimInfo();
      break;
    case false:
      voluntInfo();
      break;
  }
}
// +++

// ---
var voluntConfirm;
var voluntCounter = 1;

var voluntNames = [];
var voluntPhones = [];
var voluntStreets = [];

function voluntInfo(){
  if(voluntCounter === 1){alert("Please enter disaster volunteers:" + voluntCounter)}
  voluntNames[voluntCounter - 1] = prompt("Please enter volunteer #" + voluntCounter + "'s name.")
  voluntPhones[voluntCounter - 1] = prompt("Please enter volunteer #" + voluntCounter + "'s phone #.")
  voluntStreets[voluntCounter - 1] = prompt("Please enter volunteer #" + voluntCounter + "'s street.")
  voluntCounter++
  voluntConfirm = confirm("Enter another volunteer?\nOk = Yes\nCancel = No")
  switch(voluntConfirm){
    case true:
      voluntInfo();
      break;
    case false:
      vnvAlert();
      break;
  }
}
// ---

// ===
var victimStr = "";
var voluntStr = "";

function vnvAlert(){
  for (var i = 0; i < (victimCounter - 1); i++) {
    victimStr = victimStr + "Victim # " + (i + 1) + ": " + victimNames[i] + "-" + victimPhones[i] + "-" + victimStreets[i] + "\n"
  }
  
  for (var z = 0; z < (voluntCounter - 1); z++) {
    voluntStr = voluntStr + "Volunteer # " + (z + 1) + ": " + voluntNames[z] + "-" + voluntPhones[z] + "-" + voluntStreets[z] + "\n"
  }
  
  alert("Persons in need: " + victimCounter + "\n" +
     "Volunteers helping: " + voluntCounter + "\n" +
     victimStr + voluntStr
     )
}

victimInfo();
// ===

// Bonus P2
var personInNeed = prompt("Enter a person in need:")

var whichStreet;

if(victimStreets.length > voluntStreets.length){
  whichStreet = victimStreets.length
}else{
  whichStreet = voluntStreets.length
}

for (var i = 0; i < victimNames.length; i++) {
  if(personInNeed === victimNames[i]){
    for (var z = 0; z < whichStreet; z++) {
      if(victimStreets[z] === voluntStreets[z]){
        alert("GET " + personInNeed.toUpperCase() + " SOME HELP!!!" + "S/HE'S AT " + victimStreets[z].toUpperCase() + "!!!")
      }
    }
  }
}
// 

// Bonus P3?
//

//===================\\
// Original Solution \\
// ==================\\
// +++
// var victimNum = prompt("How many disaster victims do you wish to enter?")

// var victimNames = [];
// var victimPhones = [];
// var victimStreets = [];

// for (var i = 0; i < victimNum; i++) {
//   victimNames[i] = prompt("Please enter victim #" + (i + 1) + "'s name.")
//   victimPhones[i] = prompt("Please enter victim #" + (i + 1) + "'s phone #.")
//   victimStreets[i] = prompt("Please enter victim #" + (i + 1) + "'s street.")
// }
// +++

// ---
// var voluntNum = prompt("How many disaster volunteers do you wish to enter?")

// var voluntNames = [];
// var voluntPhones = [];
// var voluntStreets = [];

// for (var i = 0; i < voluntNum; i++) {
//   voluntNames[i] = prompt("Please enter volunteer #" + (i + 1) + "'s name.")
//   voluntPhones[i] = prompt("Please enter volunteer #" + (i + 1) + "'s phone #.")
//   voluntStreets[i] = prompt("Please enter volunteer #" + (i + 1) + "'s street.")
// }
// ---

// ===
// var victimStr = "";
// var voluntStr = "";

// for (var i = 0; i < victimNum; i++) {
//   victimStr = victimStr + "Victim # " + (i +1) + ": " + victimNames[i] + "-" + victimPhones[i] + "-" + victimStreets[i] + "\n"
// }

// for (var i = 0; i < voluntNum; i++) {
//   voluntStr = voluntStr + "Volunteer # " + (i +1) + ": " + voluntNames[i] + "-" + voluntPhones[i] + "-" + voluntStreets[i] + "\n"
// }


// alert("Persons in need: " + victimNum + "\n" +
//      "Volunteers helping: " + voluntNum + "\n" +
//      victimStr + voluntStr
//      )
// ===






