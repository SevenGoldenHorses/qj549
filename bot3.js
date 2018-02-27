console.log('INIZIO DEL BOT');

var Twit = require('twit')

var sgh = require('./Key_SGH');
// var nacho = require('./Key_nacholibre.js');
// var alanpigi = require('./alanpigi');

var fs = require('fs')
var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})


var T = new Twit(sgh);

console.log('Log-in avvenuto correttamente.');



//insert ID user account. Find it easy http://gettwitterid.com/?user_name=castellodocet&submit=GET+USER+ID
var UID = '726776221';
//parte la connessione con 
var stream = T.stream('statuses/filter', { follow: UID });
console.log('Connesisone al utente avvenuta correttamente.')

stream.on('tweet', function (tweet) {
	// grab ID of tweet to retweet
	var retweetId = tweet.id_str;
	// Tell TWITTER to retweet
	T.post('statuses/retweet/:id', { id: retweetId },function (err, data, response) {
  		if (err) {
  		console.log('Qualcosa andato storto')
  		}else{
  		console.log('RT fatto e scritto in log.txt')
  		}
	});
	//metti mi piace
	T.post('favorites/create', { id: retweetId },function (err, data, response) {
  		if (err) {
  		console.log('Qualcosa andato storto')
  		}else{
  		console.log('RT fatto e scritto in log.txt')
  		}
	});

});


//creazione stringa con URL + data
//console.log('Retweet avvenuto correttamente.');
//console.log('https://twitter.com/castellodocet/status/'+ tweet.id_str + ' creato il ' + tweet.created_at);

//logger.write('https://twitter.com/castellodocet/status/'+ tweet.id_str + ' creato il ' + tweet.created_at + "\n");





