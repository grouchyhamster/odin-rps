// Step 1. Create landing page. Test Hello world
// console.log("hello world");

//Step 2: Write logic for get computer choice

let humanChoice = "";
let computerChoice = "";

function getComputerChoice() {  
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}
// console.log(getComputerChoice())


// Step 3: Write logic for get human choice

function getHumanChoice() {
    let humanInput = prompt("type rock, paper or scissors");
    return humanChoice = humanInput.toLowerCase();
}
// console.log(getHumanChoice())


// Step 4: Declare score variable

let humanScore = 0;
let computerScore = 0;

// Step 5: Write Logic for single round

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
    }
}

playRound()
console.log("You chose " + humanChoice + ", Computer chose " + computerChoice + ", Current Score " + humanScore + "(human), " +computerScore +"(computer)") 

// Step 6: Play 5 rounds, Display result

function playGame(){
    for (let round = 1; round <=5; round++){
        playRound(getHumanChoice(),getComputerChoice())
        console.log("You chose " + humanChoice + ", Computer chose " + computerChoice + ", Current Score " + humanScore + "(human), " +computerScore +"(computer)") 
    }
    
    if (humanScore == 3){
        console.log("You win the game")
    } else if (computerScore == 3) {
        console.log("Computer wins. Better luck next time")
    } else 
        console.log("No one wins. Try Again.")
}

playGame()