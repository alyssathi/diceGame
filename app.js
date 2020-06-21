/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

const rollDice = document.getElementsByClassName("btn-roll");

let activePlayer = 0;
let scores = [0,0];
let roundScore = 0;

const changePlayer = () => {activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

//resets the current score to 0;
     document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
 //toggles the active player indicator! Good for switching classes
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
}

const roll = () => {

    document.querySelector('.dice').style.display = 'block';

    let image = document.getElementsByClassName("dice");

//random number
    let x = Math.floor(Math.random() * 6) + 1;

//dice showing pictures
    switch (true) {
        case x === 1:
            image[0].src = "dice-1.png";
        break;
        case x === 2:
            image[0].src = "dice-2.png";
            break;
        case x === 3:
            image[0].src = "dice-3.png";
            break;
        case x === 4:
            image[0].src = "dice-4.png";
            break;
        case x === 5:
            image[0].src = "dice-5.png";
            break;
        case x === 6:
            image[0].src = "dice-6.png";
            break;
    }

//if statements to add to current score IF =/ 1

if (x>1) {
    //add score
    roundScore += x;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
} else{
    //next player
    changePlayer();
}
}

const hold = document.querySelector('.btn-hold');

const holdScore = () => {
    //add current score to global score
    scores[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-' + activePlayer).textContent =  scores[activePlayer];

    //change Player

    changePlayer();

    //check if the player won the game
    if (scores[activePlayer] >= 100) 
{
    alert(`Player ${activePlayer} won the game!`)
}

}

hold.addEventListener("click", holdScore);
rollDice[0].addEventListener("click", roll);
