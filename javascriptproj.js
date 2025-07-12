// Step 1. Create landing page. Test Hello world
// console.log("hello world");

//Step 2: Write logic for get computer choice

function getComputerChoice() {  
    let options = ["rock", "paper", "scissors"];
    return computerChoice = options[Math.floor(Math.random()*options.length)];
}
// console.log(getComputerChoice())
// Notes: decided to just google for solution and focus on understanding the code
// need to use the math.floor function to round the random number
// use of square brackets for array, round brackets for function


// Step 3: Write logic for get human choice

function getHumanChoice() {
    let humanInput = prompt("type rock, paper or scissors");
    return humanChoice = humanInput.toLowerCase();
}
// console.log(getHumanChoice())
// Notes: learn how to use windows prompt, standardize conversion to lower
// defined variables need to be within the function. also chose double vs single quotes.

// Step 4: Declare score variable

var humanScore = 0
var computerScore = 0

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

// playRound(getHumanChoice(),getComputerChoice())
// console.log("You chose " + humanChoice + ", Computer chose " + computerChoice + ", Current Score " + humanScore + "(human), " +computerScore +"(computer)") 
//Notes: Got stuck at it's a draw cos variables were undefined. realised i need to call function first.

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