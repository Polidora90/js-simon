/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//alert espone 5 numeri da 1 a 100
//devo pushare i numei del computer in un array per confrontarli



var computersNumbersLenght = 5;
var computerNumbers = [];
var userNumbers = [];


//creo 5 numeri random da 1 a 100 e li pusho in un array
for (var i = 0; i < computersNumbersLenght; i++) {
    computerNumbers.push(randomNumb(1, 101));
}
console.log(computerNumbers);


//alert per mostrare i numeri all'utente
alert("Ciao! Memorizza questi numeri: " + computerNumbers.join(" - ") + ". Fatto? Bene. Clicca ok vediamo qunti ne ricorderai tra 30 secondi!");

setTimeout (myFunction, 30000);
function myFunction() {
    for (let i = 0; i < 5; i++) {
        var numeroUtente
        numeroUtente = parseInt(prompt("Inserisci un numero!"));
        userNumbers.push(numeroUtente);
    }
}

console.log(userNumbers);



//FUNZIONI
function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}