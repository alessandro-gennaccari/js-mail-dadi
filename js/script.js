// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//Pulsante Lancia il dado
var generateNumber = document.getElementById('dice-roll');
generateNumber.addEventListener('click', function() {
    
    //Dichiarate le variabili ed impostati i valori
    var cpuNumber = Math.floor(Math.random() * 6) + 1; //Numero random generato per il Computer;
    var playerNumber = Math.floor(Math.random() * 6) + 1; //Numero random generato per il Computer;
    var winner = 'Pareggio!';

    if (cpuNumber > playerNumber) {
        winner = 'Hai Perso!';
    } else if ( cpuNumber < playerNumber) {
        winner= 'Hai vinto!';
    }

    // Stampa i numeri usciti ad entrambi i concorrenti ed il vincitore
    document.getElementById('computer-dice').innerHTML = 'E \' Uscito: ' + cpuNumber;
    document.getElementById('player-dice').innerHTML = 'E\' Uscito: ' + playerNumber;
    document.getElementById('winner-is').innerHTML = winner;

    // Fa apparire il dado in base al numero uscito
    if (cpuNumber == 1) {
        document.getElementById('cpu1').className = "block";
    } else if (cpuNumber == 2) {
        document.getElementById('cpu2').className = "block";
    } else if (cpuNumber == 3) {
        document.getElementById('cpu3').className = "block";
    } else if (cpuNumber == 4) {
        document.getElementById('cpu4').className = "block";
    } else if (cpuNumber == 5) {
        document.getElementById('cpu5').className = "block";
    } else if (cpuNumber == 6) {
        document.getElementById('cpu6').className = "block";
    }

    // Fa apparire il dado in base al numero uscito
    if (playerNumber == 1) {
        document.getElementById('player1').className = "block";
    } else if (playerNumber == 2) {
        document.getElementById('player2').className = "block";
    } else if (playerNumber == 3) {
        document.getElementById('player3').className = "block";
    } else if (playerNumber == 4) {
        document.getElementById('player4').className = "block";
    } else if (playerNumber == 5) {
        document.getElementById('player5').className = "block";
    } else if (playerNumber == 6) {
        document.getElementById('player6').className = "block";
    }

    // Va via il bottone per lanciare i dadi ed appare il reset
    document.getElementById('dice-roll').className = "none";
    document.getElementById('dice-roll-reset').className = "block";
    
});


//Pulsante reset
var resetNumber = document.getElementById('dice-roll-reset');
resetNumber.addEventListener('click', function() {

    // Pulisco i campi stampati 
    document.getElementById('computer-dice').innerHTML = '';
    document.getElementById('player-dice').innerHTML = '';
    document.getElementById('winner-is').innerHTML = '';

    //Rimuovo l'image del dado del computer
    document.getElementById('cpu1').className = "none"
    document.getElementById('cpu2').className = "none"
    document.getElementById('cpu3').className = "none"
    document.getElementById('cpu4').className = "none"
    document.getElementById('cpu5').className = "none"
    document.getElementById('cpu6').className = "none"

    //Rimuovo l'image del dado del player
    document.getElementById('player1').className = "none"
    document.getElementById('player2').className = "none"
    document.getElementById('player3').className = "none"
    document.getElementById('player4').className = "none"
    document.getElementById('player5').className = "none"
    document.getElementById('player6').className = "none"

    // Va via il bottone reset e riappare quello per lanciare i dadi
    document.getElementById('dice-roll').className = "block";
    document.getElementById('dice-roll-reset').className = "none";

});