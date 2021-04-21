/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//alert espone 5 numeri da 1 a 100
//devo pushare i numei del computer in un array per confrontarli



var computersNumbersLenght = 5;
var computerNumbers = [];
var userNumbers = [];

var guessedNumbers = [];
var wrongNumbers = [];

//creo 5 numeri random da 1 a 100 e li pusho in un array
for (var i = 0; i < computersNumbersLenght; i++) {
    computerNumbers.push(randomNumb(1, 101));
}
console.log(computerNumbers);


//alert per mostrare i numeri all'utente
alert("Ciao! Memorizza questi numeri: " + computerNumbers.join(" - ") + ". Fatto? Bene. Clicca ok, vediamo qunti ne ricorderai tra 30 secondi!");

//--------------------------------------------------------ricorda di rimettere i secondi a 30!!
setTimeout(function () {
    for (var i = 0; i < 5; i++) {
        var numeroUtente
        numeroUtente = parseInt(prompt("Inserisci un numero!"));
        userNumbers.push(numeroUtente);

        var number = userNumbers[i];

        console.log(userNumbers);


        if (computerNumbers.includes(number)) {
            guessedNumbers.push(number);
        } else {
            wrongNumbers.push(number);
        }

    }

    console.log("hai indovinato " + guessedNumbers + " e hai sbagliato " + wrongNumbers);
    //se tutti i numeri utente sono presenti in numeri computer alert "hai indovinato tutti i numei"
    //se nessun numero utente è presente in numeri computer alert "non hai ricordato nemmeno un numero"
    //else hai sbagliato e hai indovinato
    if (guessedNumbers.length == 5) {
        alert("Complimenti! Ti sei ricordato tutti inumeri!");
    } else if (guessedNumbers.length == 0) {
        alert("Oh no! Sembra che tu non sia riuscito a ricordare nemmeno un numero!")
    } else {
        alert("Hai indovinato i numeri " + guessedNumbers.join(" - ") + " ma non ti sei ricordato di " + wrongNumbers.join(" - ") + " .");
    }

}, 3000);


//FUNZIONI
function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
