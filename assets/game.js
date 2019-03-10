var computerChoices = ["r","p","s"];

var wins = 0;
var losses = 0;
var ties = 0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");

document.onkeyup = function(event) {
    var userChoice = event.key;
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userChoice === "r") || (userChoice === "s") || (userChoice === "p")) {

        if ((userChoice === "r" && computerChoice === "s") ||
            (userChoice === "s" && computerChoice === "p") ||
            (userChoice === "p" && computerChoice === "r")) {
            alert ("You chose " + userChoice + " and the computer chose " + computerChoice + ". You won!");
            wins++;
            }
        else if ((userChoice === "r" && computerChoice === "p") ||
            (userChoice === "p" && computerChoice === "s") ||
            (userChoice === "s" && computerChoice === "r")) {
            alert ("You chose " + userChoice + " and the computer chose " + computerChoice + ". You lost!");
            losses++
            }
        else if ((userChoice === computerChoice)) {
            alert ("You chose " + userChoice + " and the computer chose " + computerChoice + ". It's a tie!");
            ties++;
            }

    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    tiesText.textContent = "Ties: " + ties;
}