function getComputerChoice(){
    let number = Math.floor(Math.random()*(3)+1);
    switch(number){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "error";
    }

}

function getPlayerSelection(){
    let input = prompt("Choose etiher rock, paper or scissors:")
    let convertedInput = input.toLowerCase();
    if(convertedInput!= "rock" && convertedInput != "paper" && convertedInput != "scissors"){
        alert("Invalid input!");
    }
    else {
        return convertedInput;
    }
    console.log(convertedInput);
}

function playSingleRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        console.log("it's a tie!");
    }
    else if(computerSelection === "rock" && playerSelection === "scissors"){
        console.log("Computer wins this round!");
    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        console.log("Player wins this round!");
    }
    else if(computerSelection === "scissors" && playerSelection === "paper"){
        console.log("Computer wins this round!");
    }
    else if(computerSelection === "scissors" && playerSelection === "rock"){
        console.log("Player wins this round!");
    }
    else if(computerSelection === "paper" && playerSelection === "rock"){
        console.log("Computer wins this round!");
    }
    else if(computerSelection === "paper" && playerSelection === "scissors"){
        console.log("Player wins this round!");
    }
}

console.log(playSingleRound(getComputerChoice(), getPlayerSelection()));
