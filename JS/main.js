// JS LINK RUN CHECK
console.log('JS OK!');

/*
1. Recuperare l'elemento dal DOM;
2. Chiedere all'user il suo nome;
3. Salvare il nome in una variabile;
4. Chiedere all'user il suo cognome;
5. Salvare il cognome in una variabile;
6. Chiedere all'user il suo colore preferito
7. Salvare il cognome in una variabile;
8. Inserire il risultato delle 3 variabili nell'elemento del DOM.
*/

// #1 - Recupero elemento dal DOM
const userPwdGenerator = document.getElementById('password');
console.log(userPwdGenerator)

// #2/3 - Chiedere all'user il suo nome
const userFirstName = prompt('Inserisci il tuo nome');
console.log(userFirstName)

// #4/5 - Chiedere all'user il suo cognome
const userLastName = prompt('Inserisci il tuo cognome');
console.log(userLastName)

// #6/7 - Chiedere all'user il suo colore preferito
const userFavColor = prompt('Inserisci il tuo colore preferito');
console.log(userFavColor)

// #8 - Inserire il risultato delle 3 variabili nell'elemento del DOM
userPwdGenerator.innerText = userFirstName + userLastName + userFavColor + '21';
console.log(userPwdGenerator)