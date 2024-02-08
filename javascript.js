

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
    }
    if(playerChoice == "scissor" && computerChoice == "rock"){
        console.log("Lose");
    }
    if(playerChoice == "scissor" && computerChoice == "paper"){
        console.log("Win");
    }

    if(playerChoice == "rock" && computerChoice == "paper"){
        console.log("Lose");
    }
    if(playerChoice == "rock" && computerChoice == "scissor"){
        console.log("Win");
    }
    if(playerChoice == "paper" && computerChoice == "scissor"){
        console.log("Lose");
    }
    if(playerChoice == "paper" && computerChoice == "rock"){
        console.log("Win");
    }


}
compare()