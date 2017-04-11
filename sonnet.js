var sonnet = document.getElementById("sonnet").innerHTML;

var index = sonnet.indexOf("orphans");

console.log(index);

var length = sonnet.length;
console.log("length", length);

sonnet = sonnet.replace("winter", "yuletide");

console.log("Yuletide winter", sonnet);

sonnet = sonnet.replace(/the /gi, "a large ");

console.log("large sonnet", sonnet);


document.getElementById("sonnet").innerHTML = sonnet;




/*
Replace the first occurance of the string "winter" with "yuletide".
Replace all occurances of the string "the" with "a large".
Set the content of the sonnet div with the new string.*/