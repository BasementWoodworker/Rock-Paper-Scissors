const options = Array('rock','paper','scissors');

function getRandomInteger(upperLimit) {
    return Math.floor(Math.random()*upperLimit)
}


function getComputerChoice () {
    return options[getRandomInteger(3)];
}

function chooseWinner (playerSelection, computerSelection) {
    switch (playerSelection) {
        case computerSelection:
            return "tie";
        case "rock":
            return (computerSelection==="scissors" ? "player" : "computer");
        case "paper":
            return (computerSelection==="rock" ? "player" : "computer");
        case "scissors":
            return (computerSelection==="paper" ? "player" : "computer");
    }
}

function gameEnd () {
    if (yourWins === 5) {
        roundResult.textContent = "You Won!";
        roundResult.style.color = "green";
    } else {
        roundResult.textContent = "You Lost!";
        roundResult.style.color = "red";
    }
    yourWins = 0;
    computerWins = 0;

    roundResult.append(restartButton);
    rockButton.disabled = "true";
    paperButton.disabled = "true";
    scissorsButton.disabled = "true";
}


function updateScore () {
    yourScore.textContent = `Your score: ${yourWins}`;
    computerScore.textContent = `Computer score: ${computerWins}`;
}


function restartGame () {
    updateScore();
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    roundResult.textContent = "";
    roundResult.style.color = "black";
    restartButton.remove();
}


let yourWins = 0;
let computerWins = 0;

function playRound (e) {
    let resultString = '';
    const playerSelection = e.srcElement.id;              // Access id of the pressed button
    const computerSelection = getComputerChoice();
    resultString += (`You chose ${playerSelection}` + "\n");                     
    resultString += (`Computer chose ${computerSelection}` + "\n");

    const winner = chooseWinner(playerSelection,computerSelection);

    if (winner==="player") {
        resultString += "You win";
        yourWins += 1;
    } else if (winner==="computer") {
        resultString += "You lose";
        computerWins += 1;
    } else {
        resultString += "Tie";
    }

    updateScore();

    if (yourWins === 5 || computerWins === 5) {
        gameEnd();
        return;
    }
    roundResult.textContent = resultString;
}

const restartButton = document.createElement("button");
restartButton.setAttribute("id","restart-button");
restartButton.textContent = "Restart?";
restartButton.addEventListener("click", restartGame);


let yourScore = document.querySelector("#your-score");
let computerScore = document.querySelector("#computer-score");

let roundResult = document.querySelector("#round-result");
roundResult.setAttribute("style", "white-space: pre;")          // This allows \n to work in roundResult.textContent

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);