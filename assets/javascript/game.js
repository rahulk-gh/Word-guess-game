var wordChoices = ["Bill Burr", "Eddy murphy", "Jim Carrey", "Russel Peters", "Dave Chappelle" ];
var alpha =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordC2 =""; //lower case and no space version of wordchoice[answerI]
var alreadyGuessed =[];//all characters guessed incorrectly
var numberOfGuess = 12;//total number of allowed guesses
var won = false;// has player arrived at right answer?
var answer ="";// the answer to this rounds hangman
var answerI=0;//iterator to choose this round's hangman
var positions =[];//indexes of the correct guesses for a particular guess
var correctGuess=0; //number of right guessed words
var underscores=[];
var potato = "";
var carrot ="";
var userkey ="";


var wins =0;
// var userChoice =("w");//testing only


//tested this - Final
function isPres(userX,arrayY) {
    var isPresBool =false;
    for(var i =0; i<arrayY.length; i++){
        if (arrayY[i]==userX){
            isPresBool= true;
        }
    }
    return isPresBool
}

//testing for isPres function
// console.log("in the wordChoices we see that y's existance is "+ isPres("y", wordChoices[1]));


//Function to reset variables at the start of every turn
function resetVar() {
    wordC2 ="";
    alreadyGuessed =[];
    numberOfGuess = 12;
    answer ="";
    correctanswer = false;// has player arrived at right answer?
    answerI =Math.floor(Math.random() * wordChoices.length);//iterator to choose this round's hangman
    positions =[];//indexes of the correct guesses for a particular guess
    correctGuess=0; //number of right guessed words
    underscores=[];
    potato = underscores.toString();
    carrot = alreadyGuessed.toString();

    html =
    "<p>You chose: " + userkey + "</p>" +
    "<p>Number of guesses left: " + numberOfGuess + "</p>" +
    "<p>wins: " + wins + "</p>" + 
    "<p>underscores- " + potato + "</p>" +
    "<p> already guessed: " + carrot + "</p>";

}


//Initialize game
function intialize(){
    answer = wordChoices[answerI];
    //case conversion
    wordC2 = wordChoices[answerI].toLowerCase();
 

    for (var i =0; i<wordC2.length-1; i++ ){
        underscores.push("_ ");
    }
    underscores.push("_");
}







//try to create this using the different version of forEach as below
// wordChoices.forEach(element => {
//     element.toLowerCase();
// });





// detecting user entry..works
document.onkeyup = function(event) {

    userkey = event.key;
    if ((userkey == " ")&&(won == true)){
        resetVar();
        intialize();

    }
    else if (isPres(userkey, alpha) && (won ==false)) {
        numberOfGuess--; 
        if (isPres(userkey, wordC2) && (isPres(userkey, underscores)==false)){
            //find index of the word 
            for(var i =0; i<wordC2.length; i++){
                if (wordC2[i] == userkey) {
                    positions.push(i);
                }
            }
            //replace correct dash with that word
            for (var j = 0;j<positions.length;j++){
                underscores[positions[j]] = userkey;
                correctGuess++;
            } 

        }
        else if (isPres(userkey,alreadyGuessed)==false){
            alreadyGuessed.push(userkey);
        }
        else if(correctGuess == wordC2.length){
            won = true;
            alert("You win! Play again -press space");
        }

        potato = underscores.toString();
        carrot = alreadyGuessed.toString();
        console.log(potato);
        console.log(carrot);
    }

    var html =
    "<p>You chose: " + userkey + "</p>" +
    "<p>Number of guesses left: " + numberOfGuess + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>" + potato + "</p>" +
    "<p> already guessed: " + carrot + "</p>";

    document.querySelector("#game").innerHTML = html;
    // document.getElementById("#game").innerHTML = html;

}

//finding the characters in array - this works, needs case modification
// var j = 3;
// isPresent = false;
// for(var i =0; i<wordChoices[j].length; i++){
//     if (wordChoices[j][i] == userChoice) {
//         isPresent = true;
//     }
// }

// console.log(isPresent);
// console.log(wordChoices);
// console.log(wordC2);




//display on page as guess is made
//display a snippet of information - hint
//turning correct guess into display in html
//playing mp3s 