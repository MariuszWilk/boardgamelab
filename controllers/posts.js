
app.controller('Posts', ['$scope', 'provideSlides', function($scope, provideSlides) {
	$scope.landscapes = provideSlides.getSlides();  // gets landscape images from provideSlides
	$scope.posts = [
		{
			id: 0,
			title: "Welcome!",
			content: "I've created this website for 2 reasons. I want to share my passion for board games and practice some programming, my newest hobby! I hope you find my reviews helpful and come back from time to time to see what's going on. I'll be adding a new review more or less once a week. I focus on components quality and gameplay. Feel free to send me a message in Contact section of the page!",
			image: "images/Mario.jpg",
			date: "29 May 2015"
		},
		{
			id: 1,
			title: "What's to come",
			content: "I thought it would be nice to list a few games that I'm eventually going to review since I've played them fairly recently and own most of them. A few lighter ones are Jaipur, Dixit, Port Royal, Metropolia, Small World, King of Tokyo and Splendor. On the heavier side we have Tzolk'in, Russian Railroads, Five Tribes, Puerto Rico, 7 Wonders and Le Havre. Not all reviews will be positive, however, which clearly shows that my opinions are purely subjective since all of those games firmly sit in the top 1000 games on BGG. See you on the flip side!",
			image: "images/mix.jpg",
			date: "31 May 2015"
		}
		/*,
			Ideas for the future:
				title: "Board Games Classics",
				title: "My Top 5 Games!",
				title: "Anticipated Games",
				title: "Recommended Sites",
		}*/
	];

	var top_post = $scope.posts.length - 1;

	$scope.insertPost = function(ind){  // displays no more than the last 3 posts from $scope.posts
		$scope.postDisplay = [];
		for (i=ind; i>-1; i--){
			$scope.postDisplay.push(i);
		}
		if ($scope.postDisplay.length > 3){
			$scope.postDisplay = $scope.postDisplay.slice(0,3);
		}
	};

	$scope.insertPost(top_post);
	
}]);
