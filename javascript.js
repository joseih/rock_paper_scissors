

function computer() {
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
    switch (choice) {
        case 0:
            return "scissor";
        case 1:
            return "rock";
        case 2:
            return "paper"  ;  
    }
    
}
function player() {
    let choice = prompt("Player turn")
    switch (choice) {
        case "scissor":
            return "scissor";
        case "rock":
            return "rock";
        case "paper":
            return "paper"  ;  
    }
}
function compare() {    
    let playerChoice = player();
    let computerChoice = computer();

    if(playerChoice == computerChoice){
        console.log("Draw!");
        return null
    }
    if(playerChoice == "scissor" && computerChoice == "rock"){
        console.log("Loss! "+playerChoice+" losses to "+ computerChoice);
        return false
    }
    if(playerChoice == "scissor" && computerChoice == "paper"){
        console.log("Win");
        return true
    }

    if(playerChoice == "rock" && computerChoice == "paper"){
        console.log("Loss! "+playerChoice+" losses to "+ computerChoice);
    }
    if(playerChoice == "rock" && computerChoice == "scissor"){
        console.log("Win "+ playerChoice+" win agaist "+computerChoice );
        return true

    }
    if(playerChoice == "paper" && computerChoice == "scissor"){
        console.log("Loss! "+playerChoice+" losses to "+ computerChoice);
        
    }
    if(playerChoice == "paper" && computerChoice == "rock"){
        console.log("Win "+ playerChoice+" win agaist "+computerChoice );
        return true
    }


}
let playerScore = 0, computerScore = 0
for (let index = 0; index < 5; index++) {
    let test = compare()
    if(test){
        playerScore++
    }else if(test === false){
        computerScore++
    }
}
console.log(`Player Score:${playerScore} |  Computer Score: ${computerScore}`)