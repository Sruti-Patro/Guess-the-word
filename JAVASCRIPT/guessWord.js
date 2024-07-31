
// let word;
// // guess div invisible 
// let actionOnGuessOnClickOfSet= document.getElementById("set");
// actionOnGuessOnClickOfSet.onclick = () => {
//   //store the guess word
//   const setWord = document.querySelector(".headAns").value;
//   console.log(setWord);
//   word=setWord;
//   if (setWord=="") {
//     alert("You ave not set a word which is to be guessed. Set a word.");
//   } else {
//     //set div invisible
//   document.querySelector(".head").classList.add("invisible");
//   //guess div is visible
//   document.querySelector(".guess").classList.remove("invisible");
//   // guess button visible
//   document.getElementById("guess").classList.remove("invisible");
//   //set button invisible 
//   document.getElementById("set").classList.add("invisible");
//     handleGuessWord();
//   }
// };

// // Function to handle guessing the word
// let count=false;
// const handleGuessWord = () => { 
//    let guessWord = document.querySelector(".guessAns").value;
//    console.log(`Guessed word is ${guessWord}`);
//    document.querySelector(".h1").innerHTML="Now Guess the Word.";
//    if (guessWord=="") {
//     if (!count) {
//       document.querySelector(".h1").innerHTML="Try to Guess the Word!";
//       count=!count;
//     } else {
//       document.querySelector(".h1").innerHTML=" Your input word is empty!!!";
//     }
//     // alert("Your input is blank. Enter a word.");
//    }
//    else if(guessWord.toLowerCase()==word.toLowerCase()){
//     document.querySelector(".h1").innerHTML="YOU WON!";
//     window.location.href = "won.html";
//    }
//    else if(guessWord!=word){
//     document.querySelector(".h1").innerHTML="Try Again!";
//     document.querySelector(".guessAns").value="";
//     }
//   };

//   // newMatch
//   document.querySelector(".newMatch").onclick=()=>{
//     window.location.reload();
//   }

// document.getElementById("guess").addEventListener("click", handleGuessWord);







// // set div invisible after the word is set
// // let actionOnSetOnClickOfGuess = document.getElementById("guess");
// // actionOnSetOnClickOfGuess.onclick = () => {
// //   // document.querySelector(".head").classList.add("invisible");
//   // document.querySelector(".guess").classList.remove("invisible");
// // };
let word;
// guess div invisible 
let actionOnGuessOnClickOfSet = document.getElementById("set");
actionOnGuessOnClickOfSet.onclick = () => {
  // Store the guess word
  const setWord = document.querySelector(".headAns").value;
  console.log(setWord);
  word = setWord;
  if (setWord === "") {
    alert("You have not set a word to be guessed. Set a word.");
  } else {
    // Set div invisible
    document.querySelector(".head").classList.add("invisible");
    // Guess div is visible
    document.querySelector(".guess").classList.remove("invisible");
    // Guess button visible
    document.getElementById("guess").classList.remove("invisible");
    // Set button invisible 
    document.getElementById("set").classList.add("invisible");
  }
};

// Function to handle guessing the word
const handleGuessWord = () => {
  let guessWord = document.querySelector(".guessAns").value;
  console.log(`Guessed word is ${guessWord}`);
  if (guessWord === "") {
    document.querySelector(".h1").innerHTML = "Your input word is empty!!!";
  } else if (guessWord.toLowerCase() === word.toLowerCase()) {
    document.querySelector(".h1").innerHTML = "YOU WON!";
    window.location.href = "won.html";
  } else {
    document.querySelector(".h1").innerHTML = "Try Again!";
    document.querySelector(".guessAns").value = "";
  }
};

// New Match button
document.querySelector(".newMatch").onclick = () => {
  window.location.reload();
};

document.getElementById("guess").addEventListener("click", handleGuessWord);
