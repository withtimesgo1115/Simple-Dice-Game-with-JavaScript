/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, preDice=0, curDice;

init();


function btn(){
    
    if(gamePlaying){
        // 1 Do something here
        var curDice = Math.ceil(Math.random()*6);

        // 2 display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+ curDice + '.png';


        // 3 update the round score IF the rolled number was NOT a 1
        if(curDice !== 1){
            if(preDice === 6 && curDice === 6){
                nextPlayer();
            }
            else{
                // Add score
                roundScore += curDice;
                preDice = curDice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
            }
        }
        else{
            // Next player
            nextPlayer();
            }
        
            
    }
    
}


document.querySelector('.btn-roll').addEventListener('click', btn);


document.querySelector('.btn-hold').addEventListener('click', function(){
    // Add current score to global score
    if(gamePlaying){
        
        scores[activePlayer] += roundScore; 
    
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // check if player won the game
        if(scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else{
            //next player
            nextPlayer();
        }
    }
    
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
        
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    //document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    /*
    dice = Math.ceil(Math.random()*6);

    // select id using # 
    document.querySelector('#current-' + activePlayer).textContent = dice;


    //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


    var x = document.querySelector('#score-0').textContent;

    */

    // select class using .
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

