var array = [5, "batman", "apple", "banana", true];
var numberFive = array[0];
var batman = array[1];
var apple = array[2];
var banana = array[3];
var hero = array[4];

document.write(array);

console.log("5:" + numberFive);
console.log("bat:" + batman);
console.log("apple:"+apple);
console.log("banana:" + banana);
console.log("I am hero:" + hero);

console.log(array[100/25]);
console.log(array[11%5]);

////////////////////Get Elements by class name////////////////////////
var arrayOfAnyElementHasClassOne = document.getElementsByClassName("classOne");
console.log(document.getElementsByClassName("classOne"));
console.log(arrayOfAnyElementHasClassOne);
// replaced with variables
arrayOfAnyElementHasClassOne[0].innerText="Hi";
arrayOfAnyElementHasClassOne[1].innerText="I am";
arrayOfAnyElementHasClassOne[2].innerText="Sipols";
arrayOfAnyElementHasClassOne[3].innerText="SipolsH1";

var pTags = document.getElementsByTagName("p");
pTags[0].innerText = "First tag p";
pTags[1].innerText = "Second tag p";
pTags[2].innerText = "Third tag p";
pTags[3].innerText = "Fourth tag p";
pTags[pTags.length-1].innerText = "last element p";

// document.getElementsByClassName("classOne")[0].innerText="Hi";
// document.getElementsByClassName("classOne")[1].innerText="I am";
// document.getElementsByClassName("classOne")[2].innerText="Sipols";
// document.getElementsByClassName("classOne")[3].innerText="SipolsH1";