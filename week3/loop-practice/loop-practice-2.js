var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

console.log('___Loop_Starting___')

for (var i = 0; i < 4; i++) {
  console.log(animals[i])
}

console.log('____________')

for (var i = 0; i < animals.length; i+=2) {
  console.log(animals[i])
}

console.log('____________')

for (var i = 4; i > -1; i--) {
  console.log(animals[i])
}

console.log('____________')

for (var i = 0; i < 5; i++) {
  if(i===0 || i===4){
    console.log(animals[i])
  }else{
    console.log(animals[i])
    console.log(animals[i])
  }
}