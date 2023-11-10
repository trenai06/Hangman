// 1. Create wordbank (array) randomize, push on load
let wordBank = ["JUVENILE", "COURTESY", "LISTEN", "CATCALL", "LEPROSY"];

let word = Math.floor(Math.random() * wordBank.length);
let wordSelect = wordBank[word].split("");

console.log(wordSelect);

newWord = wordSelect.toString();
console.log(newWord);

let newString = newWord.replaceAll(",", " ");
console.log(newString);

// // 2. create an empty array for letter blanks of the called word (push on load)
let underscores = "_";
let blanks;
blanks = " _".repeat(wordSelect.length - 1);

let underscoreString = underscores.concat(blanks);

document.getElementById("blank").innerHTML = underscoreString;




// 3. when a letter is chosen and correct it appears in word space

// 4. when letter is chosen blank out with same background color

function letterAppear(buttonvalue)  {
 
  
  
  if (wordSelect.includes(buttonvalue) === true) {
    let indexOfButtonValue = wordSelect.indexOf(buttonvalue).every();
    indexOfButtonValue = indexOfButtonValue + indexOfButtonValue
    let stringArray = underscoreString.split("");
    stringArray[indexOfButtonValue] = buttonvalue;
    let newHiddenString = stringArray.join("");
    underscoreString = newHiddenString;
    document.getElementById("blank").innerHTML = underscoreString;
  }
}  


for(let i = 0; i < wordSelect.length; i++){
  console.log(wordSelect[i])
}


// 5. when letter is incorrect draw a piece of the man

// 6. game win alert and reload (put it in a results function if possible)
// 7. game lose alert and reload (put it in a results function if possible )
// 8. create canvas for hangman draw
// 9. fine tune Css Styling  .remove border from the word spell out space
// 10. update wordBank and maybe add a hint:
