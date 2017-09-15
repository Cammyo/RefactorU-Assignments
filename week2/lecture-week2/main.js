var oceans = [
  "Pacific",
  "Atlantic",
  "Antarctic",
  "Arctic",
  "Indian",
  "Bering Strait",
  "Caspian Sea",
];



// function oceanMap (value,index,array){
//   console.log(value,index)
// }

// oceans.map(function(value, index, array){
//   console.log(value, index, array)
// });

// function oceanFilter (value, index){
  
//   return value[0].toUpperCase() === "A"
// }
// var oceansAAA = 
// oceans.filter(oceanFilter);
var startingMoney = 500;
var purchases = [
 {
  bought : "Monkey",
  cost   : 100
 },
 {
  bought : "Pull Over",
  cost   : 200
 },
 {
  bought : "Scarf",
  cost   : 12.75
  } 
]

function debit(accumulator, value){
  return accumulator - value.cost
}
var currentBalance = purchases.reduce(debit, startingMoney)

console.log(currentBalance)








