let wordBank = ["GARLIC", "PARSLEY", "CUMIN", "TUMERIC", "CILANTRO", "THYME", "MINT", "SAGE", "NUTMEG", "CLOVER"];
let word = Math.floor(Math.random() * wordBank.length);
let wordSelect = wordBank[word].split("");

console.log(wordSelect);

let newWord = wordSelect.toString();
let newString = newWord.replaceAll(",", " ");
console.log(newString);

let underscores = "_";
let blanks;
blanks = " _".repeat(wordSelect.length - 1);

let underscoreString = underscores.concat(blanks);
document.getElementById("blank").innerHTML = underscoreString;

let score = 1; 
let hangman = ["Post", "Head", "Body", "Right Arm", "Left Arm", "Right Leg", "Left Leg"]
let man = []

function letterAppear(buttonvalue){
  if (wordSelect.includes(buttonvalue) === true) {
    let indexOfButtonValue = wordSelect.indexOf(buttonvalue);
    indexOfButtonValue = indexOfButtonValue + indexOfButtonValue;
    let stringArray = underscoreString.split("");
    stringArray[indexOfButtonValue] = buttonvalue;
    console.log(stringArray)
    let newHiddenString = stringArray.join("");
    underscoreString = newHiddenString;
    console.log(newHiddenString)
    document.getElementById("blank").innerHTML = underscoreString; 
    document.getElementById("score").innerHTML = score++;
 
  if(score == wordSelect.length + 1){
    setTimeout(() =>{
      alert(`You Win!!! Want to try`)
        window.location.reload();
    }  , 100);
    } 
  }else if(wordSelect.includes(buttonvalue) === false){
    man.push(hangman[0])
    document.getElementById("hangman").innerHTML = man
    man.pop()
    hangman.shift()

  if(document.getElementById("hangman").innerHTML === "Left Leg"){
    setTimeout(() =>{
    alert(`You Lose! Want to try again?`)
    window.location.reload();
    }, 100);
    }
  }
}


