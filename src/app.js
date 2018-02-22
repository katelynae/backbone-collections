var Joke = Backbone.Model.extend({

});

var Jokes = Backbone.Collection.extend({
	url: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten',
	model: Joke
});

var jokesList = new Jokes();

jokesList.fetch().then(function(response){
	_.each(response.where({type: 'knock-knock'}), function(result){
		console.log(result.get('setup'));
		console.log(result.get('punchline'));
	})
});