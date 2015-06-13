var app = angular.module("BGSite" ,['ngRoute', 'ui.bootstrap']); 
// ngRoute enables view/url interdependence
// ui provides <carousel> and <slide> tags

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		controller: 'Posts',
		templateUrl: 'controllers/posts.html'
	})
	.when('/games', {
	    controller: 'Games',
		templateUrl: 'controllers/games.html'	
	})
	.when('/contact', {  
	    controller: 'Contact',
		templateUrl: 'controllers/contact.html'	
	})
	.when('/:id', {  // catches the ending as id 
	    controller: 'Games',
		templateUrl: 'controllers/reviews.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

app.service('provideSlides', function(){  // provides slides in a service called provideSlides
	var slides = ["images/spyrium.jpg", "images/takenoko.jpg", "images/jaipur.jpg"];
	return {
		getSlides: function(){
			return slides;
		}
	};
});

app.controller('HeaderController', ['$scope', '$location', function($scope, $location){ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path(); // $location.path() returns path of current url
    };
}]);


