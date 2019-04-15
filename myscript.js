var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var colore = prompt('Inserisci il tuo colore preferito');
var numero = prompt('Dimmi il tuo numero fortunato!');

var codice = numero * 3;

var psw = cognome + codice + colore + nome;

alert('Complimenti hai creato la tua password! Verrà visualizzata qui sotto');
document.writeln(psw);
