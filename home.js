const letters = document.querySelector('.letters');
const listOfWords = document.querySelector('.list-item');
var displayInput = document.getElementById('wordInput');
var displayLevelWord = document.getElementById('level-word');
var displayScore = document.getElementById('scores');


function Level(name, possibleAns) {
    this.name = name;
    this.possibleAns = possibleAns;
}
var levelOne = new Level('golden', ["den", "gold", "lend", "old", "gone", "log"]);
var levelTwo = new Level('javascript', ["car", "script", "scrap", "scar", "pit", "vast"]);

var game = [levelOne, levelTwo]
var score = 0;
var selectedArray = [];
var currentWord=null;
var index = 0;
// var msg = '';
// var levels = game.currentWord;

// switch(levels) {
//     case names.levelOne:
//     msg = 'Level 1';
//     break;
//     case name.levelTwo:
//     msg = 'Level 2';
//     break;
//     default:
//     msg = 'demo';
//     break;
// }

function startAllOver(){
    currentWord = game[index];//current word is set to first object
    index++; // index is set to increment each time this function is called
    //clearView(); //clear the view
    //newView(); // bring a new view
}
startAllOver();

//Function to split current word
function splitCurrentWord(word){
    let wrd = word.name;//takes the name property of the object in store in a variable
    //convert to array
    wrd = Array.from(wrd);
    console.log(wrd);
    //return array(splitted words)
    return wrd;
}

function startGame(){
    let splittedWords = splitCurrentWord(currentWord);
    console.log(splittedWords);
    splittedWords.forEach(function(eachChar){
        let button = document.createElement('li');
        button.textContent= eachChar;
        button.setAttribute('class','button');
        letters.appendChild(button);

    });
    let eachButton = document.querySelectorAll('.button');
    console.log(eachButton);
    eachButton.forEach(function(button){
        button.addEventListener('click', function(event){
          let sel = (event.target.textContent.toUpperCase());
          selectedArray.push(sel.toLocaleLowerCase());
          console.log(selectedArray);
          displayInput.innerHTML = selectedArray.join('');
        });
    });

    
}
startGame();

var listOfLetterWords = [];

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function(answer){
    let playedWord = selectedArray.join('').toLocaleLowerCase();
    if (playedWord.length === 3 && currentWord.possibleAns.includes(playedWord) && !listOfLetterWords.includes(playedWord)) {
        listOfLetterWords.push(playedWord);
        console.log('3 letter words ', playedWord);
        let letterWord = document.createElement('li')
        letterWord.textContent = playedWord;
        letterWord.setAttribute('class','wordlist');
        listOfWords.appendChild(letterWord);
        selectedArray = []; 
        displayInput.innerHTML = selectedArray;
        score += playedWord.length;
        console.log(score);
        displayScore.textContent = score;
    }else{
       alert('wrong word or word already played');
       selectedArray = []; 
       displayInput.innerHTML = selectedArray;
    }
})































// var chosenword = guesswords[0];

// for(let i=0; i<chosenword.name.length; i++){
//     var button = document.createElement('button');
//     var buttonText = document.createTextNode(chosenword.name[i]);
//     button.appendChild(buttonText);
//     document.getElementById("guess1").appendChild(button);
// }

// // for (let i=0; i<chosenword.value.length; i++){
// //     for(let j=0; j<chosenword.value[i].length; j++){
// //         var charDiv = this.document.createElement('div');
// //         var divText = this.document.createTextNode(chosenword.value[i].charAt(j));
// //         charDiv.appendChild(divText);
// //         this.document.getElementById("answers").appendChild(charDiv);
// //     }
// // }





//     var btn = document.getElementById("btn");
// btn.addEventListener('click', function(e){
    
//     let copyText = document.getElementById('get');
//     let answer= copyText.value;
//     console.log(answer);
//     for(let i=0; i<chosenword.value.length; i++){
//         if(answer === chosenword.value[i]){
//             document.getElementById('answers')=answer;
//         }
//     }
// });

