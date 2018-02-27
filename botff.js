console.log('INIZIO DEL BOT');

var Twit = require('twit');

var sgh = require('./Key_SGH');
// var nacho = require('./Key_nacholibre.js');
// var alanpigi = require('./alanpigi');

var fs = require('fs')
var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
});

var T = new Twit(sgh);

console.log('Log-in avvenuto correttamente.');

function BOMBA(tweet) {

	var tweetId = tweet.id_str;

	if (tweet.user.id == castellodocet || tweet.user.id == micheal7878 ) {
		//funzione Retweetta e metti mi piace
		function RTF(){
			// grab ID of tweet to retweet


			
			// fai retweet
			console.log('facendo il retweet');

			T.post('statuses/retweet/:id', { id: tweetId }, function (err, data, response) {
				if (err){
					console.log('errore');
				}else{
					console.log('RT fatto');
				}
			});
			//metti mi piace
			console.log('Mettendo mi piace');

			T.post('favorites/create', { id: tweetId }, function (err, data, response) {
				if (err){
					console.log('errore');
				}else{
					console.log('like messo');
				}
			});
			//scrivi report
			console.log('inizio scrittura');

			logger.write('https://twitter.com/castellodocet/status/'+ tweet.id_str + ' creato il ' + tweet.created_at + "\n");
			console.log('scrittura avvenuta');
		};	

		//creo un nemro casuale da moltiplicare per fare il ritardo in millisecondi
		var r = Math.floor(Math.random() * 2) + 1;
		
		var rr = r*1000; //r x 1 secondo
		
		//var rr = r*1000*60*60; //r x 1 ora
		
		//fammi vedere quanto tempo si è creato
		console.log(r); 
		console.log(rr);
			
		setTimeout(RTF, rr );  //ritardo di

		// RTF();
	};
};

//insert ID user account da seguire (esempio MorpheusNetwork, Vestarin). 
//Find it easy http://gettwitterid.com/?user_name=castellodocet&submit=GET+USER+ID
var castellodocet = '726776221';
var micheal7878 = '909704040380010501';
//parte la connessione con 
var stream = T.stream('statuses/filter', { follow:  ( '909704040380010501 , 726776221' ) });
console.log('Connesisone al utente avvenuta correttamente.');
//ogni volta che l'account twitta lui fa partire la funzione Bomba
stream.on('tweet', BOMBA );





