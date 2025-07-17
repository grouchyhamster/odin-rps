//Move defined terms to the top for easy reference
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 1;
const totalRounds = 5;

function getComputerChoice() {  
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

// Add Function to display current round, result and score, prompt
function updateDisplay(result, prompt = "") {
    document.getElementById("round-info").textContent = `Round: ${roundsPlayed}`;
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Total Score: You ${humanScore} - Computer ${computerScore}`;
    document.getElementById("prompt").textContent = prompt;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = "";

    if (humanChoice === computerChoice) {
        result = `You chose ${humanChoice}, Computer chose ${computerChoice}. It's a tie!`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        result = `You win this round! You chose ${humanChoice} and won Computer's' ${computerChoice}.`;
    } else {
        computerScore++;
        result = `Computer wins this round! You chose ${humanChoice} and lost to Computer's ${computerChoice}.`;
    }

    let promptMsg = "";
    if (roundsPlayed < totalRounds) {
        promptMsg = "Click a button to play the next round!";
    }

    updateDisplay(result, promptMsg);
    
    if (roundsPlayed >= totalRounds) {
        if (humanScore > computerScore) {
            setTimeout(() => alert("You win the game!"), 100);
        } else if (computerScore > humanScore) {
            setTimeout(() => alert("Computer wins. Better luck next time."), 100);
        } else {
            setTimeout(() => alert("No one wins. Try Again."), 100);
        }
        // Reset for a new game
        humanScore = 0;
        computerScore = 0;
        roundsPlayed = 1;
        updateDisplay("Game reset! Click a button to get started");
    } else {
        roundsPlayed++;
    }
}

//Event handlers passes the value directly into the playRound function, where it becomes humanChoice
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
