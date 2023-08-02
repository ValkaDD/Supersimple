let score = JSON.parse(localStorage.getItem('score')) || 
{wins: 0,
losses: 0,
ties: 0
};

updateScoreElement();

let isAutoPlay = false;
let intervalID = null;
function autoPlay(){
    if(isAutoPlay === false){
        intervalID = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlay = true;
        document.querySelector('.auto-play-button').innerHTML = 'Stop play'
    }
    else {
        clearInterval(intervalID);
        isAutoPlay = false; 
        document.querySelector('.auto-play-button').innerHTML = 'Auto Play';
    }
}
let isAutoOnce = false;
function autoPlayOnce(){
    if(isAutoOnce === false){
        const playerMove = pickComputerMove();
        playGame(playerMove);
    }
}

function playGame(playerMove){
const computerMove = pickComputerMove();
let result ='';

if (playerMove === 'Scissors'){
if (computerMove === 'Rock'){
result = 'You lose.';
}
else if (computerMove === 'Paper'){
result = 'You win.';
}
else if (computerMove === 'Scissors'){
result = 'Tie.';
}}

else if (playerMove === 'Paper'){
if (computerMove === 'Rock'){
result = 'You win.';
}
else if (computerMove === 'Paper'){
result = 'Tie.';
}
else if (computerMove === 'Scissors'){
result = 'You lose.';
}} 

else if (playerMove === 'Rock'){
if (computerMove === 'Rock'){
result = 'Tie.';
}
else if (computerMove === 'Paper'){
result = 'You lose.';
}
else if (computerMove === 'Scissors'){
result = 'You win.';
}
};
if (result === 'You win.'){
score.wins += 1;
}
else if (result === 'You lose.'){
score.losses += 1;
}
else if (result === 'Tie.'){
score.ties += 1;
};

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You <img class="Emoji"src="Images/${playerMove}-emoji.png" alt=""> - <img class="Emoji"src="Images/${computerMove}-emoji.png" alt=""> Computer`;
}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML = `Wins:${score.wins}, Losses:${score.losses},Ties:${score.ties}`;
}

function pickComputerMove(){const randomNumber =Math.random();
let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1/3){
computerMove ='Rock';
}else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove ='Paper';
}
else if(randomNumber >= 2/3 && randomNumber < 1){
computerMove ='Scissors';
}return computerMove;
}
