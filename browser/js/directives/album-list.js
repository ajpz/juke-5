app.directive('albumList', function() {
	return {
		restrict: 'E', 
		scope: {
			albums: '='
		}, 
		templateUrl: '/templates/albums.html'
	} 
}); 