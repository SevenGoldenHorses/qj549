/*--------------------------------------------------------------------------------------
BOT funzionamento

//creare un array con dentro i tweet (T) che devono essere publlicati contenente #
// creare una variabile che contenga gli hashtag del Bounty
//Unire gli hashtag al tweet del array
		// fissare la durata del Bounty
		// fissare il numero di tweet per settimana
		//Fissare il numero di ritwit e per settimana

//creare un ciclo che entri dentro l'array e cicli dentro per tutti i suoi valori

//creare un timer che lanci il tweet ogni tot giorni con aggiunta di un numero random

//creare un bot per account oppure fare un bot con molti account??

//mettere like/favourite ai post di un determinato account

//seguire un determinato account

// retweettare (RT) ogni volta che un utente pubblica un T

// prendere url del T e RT
// stampare URL su un file TXT
// salvare il file con nome del Bounty
--------------------------------------------------------------------------------------*/

console.log('INIZIO DEL BOT');

var Twit = require('twit')

var sgh = require('./Key_SGH');
// var nacho = require('./Key_nacholibre.js');
// var alanpigi = require('./alanpigi');

var T = new Twit(sgh);

console.log('Log-in avvenuto correttamente.');


var numeroCasuale = Math.floor(Math.random()*100);

/*--------------------------------------------------------------------------------------
funzione twitta
--------------------------------------------------------------------------------------*/

function twitta(a) {

	T.post('statuses/update', { status: a }, function(err, data, response) {
  	console.log(data)
	})

}

/*--------------------------------------------------------------------------------------
loop che usa i tweet preimpostati settimanali
--------------------------------------------------------------------------------------*/
	console.log('creo tweetProgrammati');

var tweetProgrammati = 
['Ciao mamma '+numeroCasuale,
'Ciao papà '+numeroCasuale,
'Ciao fratello '+numeroCasuale,
'Ciao sorella '+numeroCasuale,
'Ciao nonna '+numeroCasuale,
'Ciao nonno '+numeroCasuale,
'Ciao zio ' +numeroCasuale,];

	console.log('tweetProgrammati creati');


	console.log('imposto timer');

	setTimeout(twitta, 5000);

for (var i = 0; i < tweetProgrammati.length; i++) {
	console.log('entro nel loop');

	var testo = (tweetProgrammati[i]);

	console.log('testo creato!');
	
	console.log(testo);

	console.log('sparo');


	

	console.log('fine!');

}

twitta(testo);









