const btnGo = document.querySelector('button')
btnGo.addEventListener('click',compare)
const computerPlacar = document.querySelector('#computerPlacar')
const playerPlacar = document.querySelector('#playerPlacar')
let computerScore = 0
let playerScore = 0


playerPlacar.textContent = playerScore
computerPlacar.textContent = computerScore

function attPlacar(span){
    let int = parseInt(span.textContent)
    int += 1
    span.textContent = int
}


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
    const playerChoice = document.getElementsByName("playerChoice")
    for(let choice of playerChoice){
        if(choice.checked){
            console.log(choice.id)
            return choice.id
        }
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
        attPlacar(computerPlacar)
        return false
    }
    if(playerChoice == "scissor" && computerChoice == "paper"){
        attPlacar(playerPlacar)
        return true
    }

    if(playerChoice == "rock" && computerChoice == "paper"){
        attPlacar(computerPlacar)
    }
    if(playerChoice == "rock" && computerChoice == "scissor"){
        attPlacar(playerPlacar)

    }
    if(playerChoice == "paper" && computerChoice == "scissor"){
        attPlacar(computerPlacar);
        
    }
    if(playerChoice == "paper" && computerChoice == "rock"){
        attPlacar(playerPlacar)
        return true
    }


}

