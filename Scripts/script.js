//Understanding the game
/*A game played by a user and the machine. Both players choose between rock papers and scissors.
The winner is chosen based on the following rules:
1. the paper beats the rock
2. the rock beats the scissors
3. the scissors beats the paper
*/
//steps of the game
/*
1. the computer choose between paper rock and scissors 
2. the user choose between paper rock and scissors 
3. based on the previous rules the winner is determoned
*/
//pseudo code
/*
    CREATE function. Return Type = string. Name = computerPlay. paremeters = none;
        declare a variable. NAME = randomNumber. TYPE = number; INITVALUE = random value between 0 and 2.
        IF randomNumber is 0 :
            return rock
        ELSE IF randomNumber is 1: 
            return paper
        ELSE
            return scissors
    CREATE function. Return Type = string. NAME = playerPlay. PARAMETERS = none;
        declare a Variable. NAME = userGuess. TYPE = string. INITVALUE = undefined
        ask the user his guess AND store it in userGuess
        convert the string in lowercase
        return userGuess
    CREATE function. RETURN TYPE = string. NAME = startGame. parameters = playerSelection AND computerSelection
        declare variable. NAME = userGuess TYPE = string INITVALUE = returned value of playerSelection
        declare variable. NAME = computerGuess TYPE = string INITVALUE = returned value of userSelection
        IF 

*/  
let playerPoint = 0;
let computerPoint = 0;
const userName = prompt("what is your name ?");
function computerPlay(){
    const randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return 'rock'
    }else if(randomNumber === 1){
        return 'paper'
    }else{
        return 'scissor'
    }
}
function playerPlay(){
    let userGuess;
    userGuess = prompt('What is your guess?');
    userGuess = userGuess.toLowerCase();
    return userGuess;
}
function compareGuess(computer, user){
    switch(computer){
        case 'rock' :
            if(user == 'paper'){
                playerPoint ++;
                return 'You win ! Paper wraps up rock';
            }else if(user == 'scissor'){
                computerPoint++;
                return 'You lose ! rock breaks scissor'
            }else{
                return 'No winner ! You chose the same things'
            }
            break;
        case 'paper' :
            if(user == 'paper'){
                return 'No winner ! You chose the same things';
            }else if(user == 'scissor'){
                playerPoint ++;
                return 'You win ! scissor cuts paper';
            }else{
                computerPoint++;
                return 'you lose ! Paper wraps up rock';
            }
            break;
        case 'scissor':
            if(user == 'paper'){
                computerPoint++;
                return 'You lose ! scissor cuts paper';
            }else if(user == 'scissor'){
                return 'No winner ! You chose the same things';
            }else{
                playerPoint ++;
                return 'You win ! rock breaks scissor';
            }
            break;
    }
}
function playRound(playerSelection, computerSelection, compare){
    let userGuess = playerSelection();
    let computerGuess = computerSelection();
    let result = compare(computerGuess, userGuess);
    return result;
}
function game(){
    for(i=0; i<5; i++){
        console.log(playRound(playerPlay, computerPlay, compareGuess));
    }
    if(playerPoint < computerPoint){
        console.log(`Results : Computer ${computerPoint} | ${userName} ${playerPoint}. Decison: The computer wins!`);
    }else if(playerPoint > computerPoint){
        console.log(`Results : Computer ${computerPoint} | ${userName} ${playerPoint}. Decison: ${userName} wins!`)
    }else{
        console.log(`Results : Computer ${computerPoint} | ${userName} ${playerPoint}. Decison: No winner. Sorry charlie`)
    }
}
game();