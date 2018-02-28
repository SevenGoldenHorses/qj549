console.log('INIZIO DEL BOT');

var Twit = require('twit');

var nacho = require('./Key_micheal7878.js');

var T = new Twit(nacho);

console.log('Log-in avvenuto correttamente.');

function BOMBA(tweet) {
	// grab ID of tweet to retweet
	var tweetId = tweet.id_str;

	if (tweet.user.id == sevengoldenhorses || tweet.user.id == bitconius || tweet.user.id == dbrain || tweet.user.id == doctailor || tweet.user.id == familypoints || tweet.user.id == iconic || tweet.user.id == kora || tweet.user.id == mossland || tweet.user.id == stealthcrypto ) {
		//funzione Retweetta e metti mi piace
		function RTF(){
			
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
		};	

		//creo un nemro casuale da moltiplicare per fare il ritardo in millisecondi
		var r = Math.floor(Math.random() * 30) + 1;
		
		var rr = r*60000+900000; //r x 1 minuto + 15min
		
		//fammi vedere quanto tempo si è creato
		console.log(r); 
		console.log(rr);
			
		setTimeout(RTF, rr );

	};
};

//insert ID user account da seguire (esempio MorpheusNetwork, Vestarin). 
//Find it easy http://gettwitterid.com/?user_name=castellodocet&submit=GET+USER+ID
//var castellodocet = '726776221';
//var micheal7878 = '909704040380010501';
var sevengoldenhorses = '920917613655584768'; //tengo questo account per fare dei test di controllo

var bitconius = '953264830454095872';
var dbrain = '888326326284890113';
var doctailor = '944605766404763649';
var familypoints = '957565773387616256';
var iconic = '950095434952921090';
var kora = '904533387729358854';
var mossland = '948119493040943104';
var skychain = '935520196865019905';
var stealthcrypto = '955280820058509312';


//parte la connessione con 
var stream = T.stream('statuses/filter', { follow:  ( ' 920917613655584768, 953264830454095872 , 888326326284890113 , 944605766404763649 , 957565773387616256 , 950095434952921090 , 904533387729358854 , 948119493040943104 , 935520196865019905, 955280820058509312' ) });
console.log('Connesisone al utente avvenuta correttamente.');
//ogni volta che l'account twitta lui fa partire la funzione Bomba
stream.on('tweet', BOMBA );





