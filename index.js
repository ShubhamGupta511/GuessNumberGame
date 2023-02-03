let number = Math.floor(Math.random() * 100 + 1);

let chances = 0;
let guess;

guess = prompt("Guess the Value and Play");
++chances;

do {
  guess = Number.parseInt(guess);
  if (guess > number) {
    console.log("You Entered a Bigger Number");
    guess = prompt("Play Again");
    guess = Number.parseInt(guess);
    chances++;
    continue;
  }
  else if (guess < number) {
    console.log("You Entered a Smaller Number");
    guess = prompt("Play Again");
    guess = Number.parseInt(guess);
    chances++;
    continue;
  }
}
while (guess != number);

let score = 100 - chances;
console.log("\nCongratulations🥳🥳\nThe number generated was", number + " and you guessed it right😁\nYour final score is", score);

