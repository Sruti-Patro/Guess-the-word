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
