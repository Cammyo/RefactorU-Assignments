var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

console.log("___STARTING_LOOPS___")

for (var i = 0; i < months.length; i++) {
  for (var z = 0; z < months[i].days; z++) {
    dayz = z + 1
    console.log(months[i].name + " " + dayz)
  }
}

console.log("___________")

for (var s = 1; s < 61; s++) {
  for (var m = 1; m < 61; m++) {
    for (var h = 1; h < 25; h++) {
      console.log(h + ":" + m + ":" + s)
    }
  }
}





















