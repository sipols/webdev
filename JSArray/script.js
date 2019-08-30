var array = [5,8,10,11];

console.log(typeof array);
console.log(array);
console.log(array[0]);
console.log(array[3]);
console.log(array[5]); //out of bounds

var sArray = ["zero", "one", "two"];

console.log(sArray);
console.log(sArray[4]);

var mixArray = [5, "text", 56, "name", true, false];

console.log(mixArray);
console.log(mixArray[4]);
console.log(typeof mixArray);
console.log(typeof mixArray[5]);

var x = 10;
var s = "string";
var bool = true;
var arr = [x, s, bool];

console.log(arr);

var arArray = [arr, array, mixArray, sArray];

console.log(arArray);
console.log(arArray[2]);
console.log(arArray[2][2]);
console.log(arArray[2][3]);
console.log(arArray[0][2]);
console.log(typeof arArray[2]);

// sAarray.forEach(element => {
//     console.log(element);
// });

document.getElementById("res").innerText = arArray;
document.write(arArray);
console.log(arArray.length);
console.log(arArray[arArray.length-1]);
