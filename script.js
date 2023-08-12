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
    let winner = "";
    if (computerSelection === playerSelection){
        console.log("it's a tie!");
        alert("it's a tie!");
        winner = "tie";
    }
    else if(computerSelection === "rock" && playerSelection === "scissors"){
        console.log("Computer wins this round!");
        alert("Computer wins this round!");
        winner = "computer";
    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        console.log("Player wins this round!");
        alert("Player wins this round!");
        winner = "player";
    }
    else if(computerSelection === "scissors" && playerSelection === "paper"){
        console.log("Computer wins this round!");
        alert("Computer wins this round!");
        winner = "computer";
    }
    else if(computerSelection === "scissors" && playerSelection === "rock"){
        console.log("Player wins this round!");
        alert("Player wins this round!");
        winner = "player";
    }
    else if(computerSelection === "paper" && playerSelection === "rock"){
        console.log("Computer wins this round!");
        alert("Computer wins this round!");
        winner = "computer";
    }
    else if(computerSelection === "paper" && playerSelection === "scissors"){
        console.log("Player wins this round!");
        alert("Player wins this round!");
        winner = "player";
    }

    return winner;
}

function game(){
    let round = 0, scorePlayer = 0, scoreComputer = 0;
    while (round <= 5){
        let winner = playSingleRound(getComputerChoice(), getPlayerSelection());
        if(winner === "tie"){
            scorePlayer++;
            scoreComputer++;
        }
        else if(winner === "player"){
            scorePlayer++;
        }
        else if(winner === "computer"){
            scoreComputer++;
        }
        round++;
    }
    alert(`Player: ${scorePlayer}; Computer: ${scoreComputer}`);
    if(scoreComputer > scorePlayer){
        alert("Computer wins!");
    }
    else {
        alert("Player wins!");
    }
    
}

console.log(game());

