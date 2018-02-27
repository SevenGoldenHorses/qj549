for (var i = 0; i < tweetProgrammati.length; i++) {
function twitta(tweetProgrammati[i]) {

	

	T.post('statuses/update', { status: tweetProgrammati[i] }, function(err, data, response) {
  	console.log(data)
	})
	}
	
	setTimeout(twitta, 5000);

	console.log('Inviato!');


}
