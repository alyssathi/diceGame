/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//State Variable
let gameplay = true;

//scores target
const resetScore0 = document.getElementById('score-0');
const resetScore1 = document.getElementById('score-1');
const resetCurrent0 = document.getElementById('current-0');
const resetCurrent1 = document.getElementById('current-1');

//button target
const rollDice = document.getElementsByClassName("btn-roll");
const hold = document.querySelector('.btn-hold');
const newGame = document.querySelector('.btn-new');

//dice picture target
const dicePicture = document.querySelector('.dice');
let activePlayer = 0;
let scores = [0,0];
let roundScore = 0;

const resetScores = () => {resetScore0.textContent = '0';
resetScore1.textContent = '0';}
const resetCurrent = () => {resetCurrent0.textContent = '0';
resetCurrent1.textContent = '0';}

resetCurrent();
resetScores();
dicePicture.style.display = 'none';

const changePlayer = () => {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

//resets the current score to 0;
    resetCurrent();
    
 //toggles the active player indicator! Good for switching classes
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    dicePicture.style.display = 'none';
}

const roll = () => {

    if (gameplay) 
    {dicePicture.style.display = 'block';

//random number
    let x = Math.floor(Math.random() * 6) + 1;

//dice showing pictures
    switch (true) {
        case x === 1:
            dicePicture.src = "dice-1.png";
        break;
        case x === 2:
            dicePicture.src = "dice-2.png";
            break;
        case x === 3:
            dicePicture.src = "dice-3.png";
            break;
        case x === 4:
            dicePicture.src = "dice-4.png";
            break;
        case x === 5:
            dicePicture.src = "dice-5.png";
            break;
        case x === 6:
            dicePicture.src = "dice-6.png";
            break;}

//if statements to add to current score IF =/ 1

if (x>1) {
    //add score
    roundScore += x;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
} else{
    //next player
    changePlayer();
}}
}

const holdScore = () => {
if (gameplay) {  //add current score to global score
    scores[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-' + activePlayer).textContent =  scores[activePlayer];

    //check if the player won the game
    if (scores[activePlayer] >= 10) 
{
    document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
    resetCurrent();
    dicePicture.style.display = 'none';
    gameplay = false;
} else {
//change Player
changePlayer();
}}
}

const startNewGame = () => {
    resetCurrent();
    resetScores();
    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent= 'PLAYER 2';
    gameplay = true;
}

newGame.addEventListener('click', startNewGame);
hold.addEventListener("click", holdScore);
rollDice[0].addEventListener("click", roll);
