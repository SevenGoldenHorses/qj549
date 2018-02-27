console.log('INIZIO DEL BOT');

var Twit = require('twit');

var sgh = require('./Key_SGH');

var fs = require('fs');
var logger = fs.createWriteStream('log2.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
});

var T = new Twit(sgh);

console.log('Log-in avvenuto correttamente.');




var castellodocet = '726776221';
var stream = T.stream('statuses/filter', { follow: castellodocet });
stream.on('tweet', function (tweet) {




T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
	if (err){
	console.log(err) ;
}else{
	console.log(response) ;
}
})

console.log('fine RT') ;


}) ;

