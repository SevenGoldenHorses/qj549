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

	// var r = Math.floor(Math.random() * 6) + 1;
	// var rr = r*1000;

	function RTF(){
		// grab ID of tweet to retweet
		var tweetId = tweet.id_str;
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

	setTimeout(RTF, 1000 );
};

//insert ID user account. Find it easy http://gettwitterid.com/?user_name=castellodocet&submit=GET+USER+ID
var castellodocet = '726776221';
//parte la connessione con 
var stream = T.stream('statuses/filter', { follow: ( castellodocet ) });
console.log('Connesisone al utente avvenuta correttamente.');

stream.on('tweet', BOMBA );





