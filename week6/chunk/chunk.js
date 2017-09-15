function chunk(arr, splitSize){
    var results = [];
    while (arr.length) {
        results.push(arr.splice(0, splitSize));
    }
    return results;
}

var input = [1,2,3,4,5,6,7,8,9,10];
var input2 = [1,2,3,4,5,6,7,8,9,10];
var input3 = [1,2,3,4,5,6,7,8,9,10];


console.log(chunk(input,2));
console.log(chunk(input2,3));
console.log(chunk(input3,7));