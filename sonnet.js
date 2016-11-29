
/*Paste the code below into your HTML file.
Take the contents of the sonnet div and place it in a variable
Find and output the starting position of the word "orphans"
Output the number of characters in the sonnet
Replace the first occurance of the string "winter" with "yuletide"
Replace all occurances of the string "the" with "a large"
Set the content of the sonnet div with the new string*/

var theSonnet = document.getElementById("sonnet").innerHTML
console.log(theSonnet)

console.log(theSonnet.indexOf("orphans"))

var numberofCharacters = theSonnet.length;
console.log("numberofCharacters", numberofCharacters)


var newSonnet = theSonnet.replace("winter", "yuletide")
console.log(newSonnet)
var newSonnet;
newSonnet = newSonnet.split(" the ").join(" a large ");
newSonnet = newSonnet.split(" The ").join(" Large");
document.getElementById("sonnet").innerHTML = newSonnet
console.log()