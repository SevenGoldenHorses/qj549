/*--------------------------------------------------------------------------------------
Funzionamento

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







// RETWEET BOT ==========================

// find latest tweet according the query 'q' in params
var retweet = function() {
    var params = {
        q: '#Montalbano',  // REQUIRED
        result_type: 'recent',
        //lang: 'en'
    }
    // for more parameters, see: https://dev.twitter.com/rest/reference/get/search/tweets

    T.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
          // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            // Tell TWITTER to retweet
            T.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');
                }
                // if there was an error while tweeting
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
                }
            });
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...');
        }
    });
}

// grab & retweet as soon as program is running...
retweet();

// retweet in every 50 minutes
setInterval(retweet, 1000);




/*
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
// var parametro = { q: '#MorpheusNetwork', count: 5 }


var stream = T.stream('Micheal7878')

stream.on('tweet', function (tweet) {
	console.log(tweet);
  // console.log(tweet.statuses.text);
})

// function prendiDati(err, data, response) {
// 	var tweets = data.statuses;
// 	for (var i = 0; i < tweets.length; i++) {
// 		console.log(tweets[i].text);
// 	}
// }
*/




