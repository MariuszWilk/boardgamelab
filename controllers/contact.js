
app.controller('Contact', ['$scope', function($scope) {  // send data from contact form to node.js at rhcloud
	$scope.logsth = function(){
		var name = $('#contact-name').val();
		var email = $('#contact-email').val();
		var message = $('#contact-message').val();
		var data_set = {name:name, email:email, message:message};
		$.ajax({
		  url: "http://bgl-boardgamelab.rhcloud.com/form",
		  method: 'POST',
		  data: data_set
		});
		$('#contact').modal('hide');
	};
}]);