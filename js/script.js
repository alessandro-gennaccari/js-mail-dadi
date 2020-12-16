// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var generateNumber = document.getElementById('dice-roll');
generateNumber.addEventListener('click', function() {
    
    var cpuNumber = Math.floor(Math.random() * 6) + 1; //Numero random generato per il Computer;
    var playerNumber = Math.floor(Math.random() * 6) + 1; //Numero random generato per il Computer;
    var winner = 'Wow c\'è stato un pareggio!';

    if (cpuNumber > playerNumber) {
        winner = 'Hai Perso!';
    } else if ( cpuNumber < playerNumber) {
        winner= 'Hai vinto!';
    }
    
    console.log(winner);
});
