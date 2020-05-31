/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// here we defined necessary variables at first and we don't need to assign values but declaration
var scores, roundScore, roundScore2, activePlayer, gamePlaying, preDice=0, preDice2, curDice, curDice2, finalScore;

// due to the concept called "DRY", we can write a function to initialize the game state
init();

// here we defined a non-anonymous function called btn
function btn(){
    
    if(gamePlaying){
        // 1 generate random numbers
        var curDice = Math.ceil(Math.random()*6);
        var curDice2 = Math.ceil(Math.random()*6);

        // 2 display the result
        var diceDOM = document.querySelector('.dice');
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM.src = 'dice-' + curDice + '.png';
        diceDOM2.src = 'dice-' + curDice2 + '.png';

        // 3 update the round score IF the rolled number was NOT a 1
        if(curDice !== 1 && curDice2 !== 1){
            // update the round score IF the current rolled number is NOT the same as previous number with 6 
            if((preDice === 6 && curDice === 6) || (preDice2 === 6 && curDice2 === 6)){
                nextPlayer();
            }
            else{
                // Add score
                roundScore += curDice;
                roundScore2 += curDice2;
                preDice = curDice;
                preDice2 = curDice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore + roundScore2; 
            }
        }
        else{
            // Next player
            nextPlayer();
            }
        
            
    }
    
}


document.querySelector('.btn-roll').addEventListener('click', btn);

// anonymous function we just can use here
document.querySelector('.btn-hold').addEventListener('click', function(){
    // Add current score to global score
    if(gamePlaying){
        
        // store the rolled scores 
        scores[activePlayer] += roundScore + roundScore2; 
    
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // we give the chance to players to determine the termination condition
        var input = document.querySelector('.final-score').value;
        if(input){
            var winningScore = input;
        }else{
            winningScore = 100;
        }
        
        // check if player won the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            // game state which can be used to check if we can continue playing
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
    roundScore2 = 0;
        
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    //document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click',init);

// initialization
function init(){
    // assign values to our variables
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    roundScore2 = 0;
    gamePlaying = true;
    
    /*
    dice = Math.ceil(Math.random()*6);

    // select id using # 
    document.querySelector('#current-' + activePlayer).textContent = dice;


    //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


    var x = document.querySelector('#score-0').textContent;

    */

    // select class using .
    // we don't want to see dice before we rolled them
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    
    // set the content
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    // select css style using class operation
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

