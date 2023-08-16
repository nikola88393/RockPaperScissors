
let rounds = 0; scorePlayer = 0, scoreComputer = 0;

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
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
        const choice = button.classList[1];
        game(choice);
        });
    });
}


function playSingleRound(computerSelection, playerSelection){
    let winner = "";
    const status = document.querySelector('.roundStatus');
    if (computerSelection == playerSelection){
        console.log("it's a tie!");
        status.textContent = "it's a tie!";
        winner = "tie";
    }
    else if(computerSelection == "rock" && playerSelection == "scissors"){
        console.log("Computer wins this round!");
        status.textContent = "Computer wins this round!";
        winner = "computer";
    }
    else if(computerSelection == "rock" && playerSelection == "paper"){
        console.log("Player wins this round!");
        status.textContent = "Player wins this round!";
        winner = "player";
    }
    else if(computerSelection == "scissors" && playerSelection == "paper"){
        console.log("Computer wins this round!");
        status.textContent = "Computer wins this round!";
        winner = "computer";
    }
    else if(computerSelection == "scissors" && playerSelection == "rock"){
        console.log("Player wins this round!");
        status.textContent = "Player wins this round!";
        winner = "player";
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        console.log("Computer wins this round!");
        status.textContent = "Computer wins this round!";
        winner = "computer";
    }
    else if(computerSelection == "paper" && playerSelection == "scissors"){
        console.log("Player wins this round!");
        status.textContent = "Player wins this round!";
        winner = "player";
    }

    return winner;
}




function game(playerChoice){
    let computerScore = document.querySelector('.scoreComputer');
    let playerScore = document.querySelector('.scorePlayer');
    let Rounds = document.querySelector('.rounds');
    if(rounds > 9){
        if(scoreComputer > scorePlayer){
            alert("Computer wins!");
            scoreComputer=0;
            scorePlayer=0;
            rounds = 0;
        }
        else if(scoreComputer === scorePlayer){
            alert("It'a tie!");
            scoreComputer=0;
            scorePlayer=0;
            rounds = 0;
        }
        else {
            alert("Player wins!");
            scoreComputer=0;
            scorePlayer=0;
            rounds = 0;
        }
    
    }
    
        let winner = playSingleRound(getComputerChoice(), playerChoice);
        if(winner == "tie"){
            scorePlayer++;
            scoreComputer++;
        }
        else if(winner == "player"){
            scorePlayer++;
        }
        else if(winner == "computer"){
            scoreComputer++;
        }
    
    rounds++;

    computerScore.textContent = scoreComputer;
    playerScore.textContent = scorePlayer;
    Rounds.textContent = rounds;
    
    
}

console.log(getPlayerSelection());

