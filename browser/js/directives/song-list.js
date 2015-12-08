app.directive('songList', function(PlayerFactory) {
	return {
		restrict: 'E', 
		scope: {
			songs: '='
		},
		templateUrl: '/templates/song-list.html', 
		link: function(scope) {
			scope.isCurrent = function (song) {
				var current = PlayerFactory.getCurrentSong();
				return current && current._id == song._id;
			};

			scope.start = function (song) {
				// console.log("starting");
				PlayerFactory.start(song, scope.songs);
			};
			// scope.test = function() {
			// 	console.log("testing the songList scope");
			// }
		} 
	};
})
.directive('doubleClick', function(){
	return {
		restrict: 'A',
		scope: {
			doubleClick: '&'
		},
		link: function(scope, element) {
			element.on('dblclick', function(){
				scope.doubleClick();
			});
		}
	}
});