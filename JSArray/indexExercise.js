
// saving variable to look at all h1 elems
var hTags = document.getElementsByTagName("h1");
// text in the tag
hTags[0].innerText = "First tag h1";
//color
hTags[0].style.color = "red";

hTags[1].innerText = "Second tag h1";
hTags[1].style.color = "blue";

hTags[2].innerText = "Third tag h1";
hTags[2].style.color = "yellow";

hTags[3].innerText = "Fourth tag h1";
hTags[3].style.color = "green";

hTags[4].innerText = "5 tag h1";
hTags[4].style.color = "grey";

hTags[5].innerText = "6 tag h1";
hTags[5].style.color = "lightcoral";
hTags[5].remove(); // to remove an element

hTags[6].innerText = "7 tag h1";
hTags[6].style.color = "orange";

hTags[7].innerText = "8 tag h1";
hTags[7].style.color = "purple";

hTags[8].innerText = "9 tag h1";
hTags[8].style.color = "violet";

hTags[hTags.length-1].innerText = "Last element h1";
hTags[hTags.length-1].style.color = "khaki";

console.log(hTags);
console.log(hTags[1]);
console.log(hTags[3]);

var h3Tags = document.getElementsByTagName("h3");
h3Tags[0].innerText = "First tag h3";
console.log(h3Tags[0]);
