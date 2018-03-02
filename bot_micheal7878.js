console.log('INIZIO DEL BOT');

var Twit = require('twit');

var nacho = require('./Key_micheal7878.js');

var fs = require('fs')
var logger = fs.createWriteStream('report_Nacho.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
});

var T = new Twit(nacho);

console.log('Log-in avvenuto correttamente.');

function BOMBA(tweet) {
	// grab ID of tweet to retweet
	var tweetId = tweet.id_str;
	var tweetName = tweet.user.screen_name;
	var testoTweet = tweet.text;
	var inRisposta = tweet.in_reply_to_user_id_str;//tweet.in_reply_to_status_id_str;
	console.log(testoTweet);

	if ( tweet.user.screen_name !== 'Micheal7878' ) { 	
		if( testoTweet.includes('RT ') == false && inRisposta === null ){
			// Fai la funzione Retweetta e metti mi piace
			console.log(tweet);
			function RTF(){
				// fai retweet
				T.post('statuses/retweet/:id', { id: tweetId }, function (err, data, response) {
					
					if (err){
						console.log('Errore.\n');
					}else{
						console.log('RT fatto a '+ tweetName+'\n');
					}			
				});
				//metti mi piace
				T.post('favorites/create', { id: tweetId }, function (err, data, response) {
					if (err){
						console.log('errore\n');
					}else{
						console.log('LK messo a '+ tweetName+'\n');
					}
				});
				//scrivi report
				logger.write('https://twitter.com/castellodocet/status/'+ tweet.id_str + ' creato il ' + tweet.created_at + "\n");
				console.log('Report fatto.\n');
			}; //fine funzione RTF

			//creo un nemro casuale da moltiplicare per fare il ritardo in millisecondi
			var r = Math.round((Math.random() * 4 + 1) *600000 + 30*60000); //r = Math.floor(Math.random() * 4) + 1;
			var tempoRitardo = Math.round(r/60000);
			console.log(tempoRitardo + ' minuti al RT e LK di ' + tweetName + '\n' );
			//faccio partire la funzione con ritardo
			setTimeout(RTF, r );
		}else{
		 	console.log('E\' un RT o un commento. Non lo retwitto.\n');
		}; //chiusura IF RT o COMMENTO
	}else{
		console.log('E\' un RT del BOT. Non fare niente.\n');
	}; //chiusura IF utente bot
}; //chiusura di BOMBA

//insert ID user account da seguire (esempio MorpheusNetwork, Vestarin).
var COTInetwork = '913327957904695297';
var safehavenio = '929817868673437697';
var WandXDapp = '879588404693827585';
var injii = '2351528224';
var Victorium_Org = '943622133506347008';
var AssetToken = '887925114100043776';
var IagonOfficial = '928375322017382401';
//test
var federicodigesu = '174606919';
//----- 
var bitconius = '953264830454095872';
var dbrain = '888326326284890113';
var doctailor = '944605766404763649';
var familypoints = '957565773387616256';
var iconic = '950095434952921090';
var kora = '904533387729358854';
var skychain = '935520196865019905';
var mossland = '948119493040943104';	
var stealthcrypto = '955280820058509312';
//sotto vecchi
var dubtokens = '900442763598192641';
var jointeamwell = '3731754254';
var morphcrypto = '943369448035049472';
var farmatrust = '887638060116082688';
var vestarin = '928665122645692416';
var medichainonline = '754008453979439105';


//parte la connessione con 
var stream = T.stream('statuses/filter', { follow:  ( '913327957904695297 , 929817868673437697 , 879588404693827585 , 2351528224 ,943622133506347008 , 887925114100043776 , 928375322017382401 , 174606919, 953264830454095872 , 888326326284890113 , 944605766404763649 , 957565773387616256 , 950095434952921090 , 904533387729358854 , 935520196865019905, 948119493040943104 ,   , 955280820058509312, 900442763598192641 , 3731754254 , 943369448035049472 ,  887638060116082688 , 928665122645692416 , 754008453979439105 ' ) });
console.log('Connesisone al utente avvenuta correttamente.\n');
//ogni volta che l'account twitta lui fa partire la funzione Bomba
stream.on('tweet', BOMBA );





