function getComputerChoice(){
    let number = Math.floor(Math.random()*(3)+1);
    switch(number){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Error";
            break;
    }
}

for(let i = 0; i < 10; i++){
    console.log(getComputerChoice());
}