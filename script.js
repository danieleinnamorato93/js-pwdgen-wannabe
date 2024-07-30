/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine stampa in console nomecognomecolorepreferito21
ES: marcolanciverde21*/
//prova del collegamento del documento  alla console
console.log('JS OK');

// 1) Preparazione : Recupero l'elemento di interesse nel DOM
const passwordElement = document.getElementById ('password');
console.log('passwordElement');

//Aggiungo variabile predeterminata NUMBER
const number = 21;
console.log (number, typeof number);


// 2) Raccolta dati: chiedo nome/cognome/colore preferito

//NOME
const firstName = prompt('Come ti chiami?', 'Daniele');
console.log('firstName');

//COGNOME
const lastName = prompt('Il tuo cognome?', 'Innamorato');
console.log('lastName');

//COLORE
const favoriteColor = prompt('Colore preferito?', 'Bordeaux');
console.log('favouriteColor');



// 2) Elaborazione dati

const newPw = `${firstName} ${lastName}`