
app.factory('bggapi', function($http){  // defines a function to retrieve game info from BoardGameGeek API based on it's id
	return {
		getGame: function(game_id){
			return $http.get("http://bgg-json.azurewebsites.net/thing/" + game_id).then(function(data){
				return data;
			});
		}
	}
});


