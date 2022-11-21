let options = Array('rock','paper','scissors');


function getComputerChoice () {
    return options[Math.floor(Math.random()*3)];
}


function playRound (playerSelection, computerSelection) {
    if (typeof playerSelection!=="string") {
        return ("Wrong input! Please enter Rock, Paper or Scissors");
    }
    
    playerSelection=playerSelection.toLowerCase();

    if (!options.includes(playerSelection)) {
        return ("Wrong input! Please enter Rock, Paper or Scissors");
    }

    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);

    if (playerSelection===computerSelection) {
        return (`Tie! You both have ${computerSelection}`);
    }

    switch (playerSelection) {
        case "rock":
            return computerSelection==="scissors" ? "You Win! Rock beats Scissors" : "You Lose! Paper beats Rock";
        case "paper":
            return computerSelection==="rock" ? "You Win! Paper beats Rock" : "You Lose! Scissors beat Paper";
        case "scissors":
            return computerSelection==="paper" ? "You Win! Scissors beat Paper" : "You Lose! Rock beats Scissors";
    }
    }


function game() {
    for (let i=1; i<6 ;i++) {
        console.log(`Round ${i}`);
        console.log(playRound (prompt("Make your choice"),getComputerChoice()));
    }
}