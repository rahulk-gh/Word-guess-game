var wordChoices = ["Bill Burr", "Eddy murphy", "Jim Carrey", "Russel Peters"];
var userChoice =("w");
var test ="DUMMY test";

//converting `entries to lower case
var wordC2 =[];
//try to create this using the different version of forEach as below
// wordChoices.forEach(element => {
//     element.toLowerCase();
// });


//case conversion
for (var i =0; i < wordChoices.length; i++){
    wordC2[i] = wordChoices[i].toLowerCase().replace(' ', '');
}

// test = test.replace(' ', '');

//finding the characters in array - this works, needs case modification
var j = 3;
isPresent = false;
    for(var i =0; i<wordChoices[j].length; i++){
        if (wordChoices[j][i] == userChoice) {
            isPresent = true;
        }
    }

console.log(isPresent);
console.log(wordChoices);
console.log(wordC2);

//tested this
function isPres(userx,y) {
    isPresBool =false;
    for(var i =0; i<y.length; i++){
        if (y[i]==userx){
            isPresBool= true;
            break;
        }
    }
    return isPresBool
}

//testing for isPres function
// console.log("in the wordChoices we see that y's existance is "+ isPres("y", wordChoices[1]));

// detecting user entry..works
document.onkeyup = function(event) {
    var userkey = event.key;
    
    if (isPres(userkey, wordChoices[1])){
        alert("works");
    }
    else{
        alert("nope")
    }    

}



// document.onkeyup = function(event) {
//     var userkey = event.key;
    
//     if
//     if (userkey === "w"){
//         car.driveToWork();
//         reWriteStats();
//     }
    

// }


//for the set number of guesses search for ALL instances of the char and insert into another string
//so count the number of detected keystrokes
//for every keystroke check string and update text fields update keystroke counter if not repeat
//





//display on page as guess is made
//display a snippet of information - hint
//turning correct guess into display in html
//playing mp3s 