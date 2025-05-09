/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let datatypeFirst = String;
let datatypeSecond = Number;
let datatypeThird = Boolean;
let datatypeFour = undefined;
let datatypeFive = null;

console.log(datatypeFirst, "sono datatype dove si utilizzano i caratteri e sono racchiuse da virgolette,apostrofi e backtick");
console.log(datatypeSecond, "sono datayype con valore numerico,anche decimale e non prevedono l'uso id vergolette,apostrofi e backtick");
console.log(datatypeThird, "comprendono solo due valori ovvero true e false e servono per far prendere decisioni al codice");
console.log(datatypeFour, "rappresenta la non presenza di valore o l'assenza di una variabile");
console.log(datatypeFive, "rapprenseta l'intezionale fi valore");
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let mioNome = "Daniele";
console.log(mioNome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;
console.log(numero1 + numero2);
let somma = numero1 + numero2;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let variabileX = 12;
console.log(variabileX);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

Daniele = "Sanzari";
console.log(Daniele);
const Sanzari = 100;
//Sanzari = 50; // non consentito
console.log(Sanzari);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero3 = 4;
console.log(numero3 - variabileX);
let result = 4 - variabileX;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
console.log(name1 === name2);
console.log(name1.toLocaleLowerCase() === name2.toLocaleLowerCase());
