app.config(function ($stateProvider) {
	$stateProvider.state('albums', {
		url: '/albums',
		template: '<album-list albums="albums"></album-list>',
		// templateUrl: '/templates/albums.html',
		controller: 'AlbumsCtrl',
		resolve: {
			allAlbums: function (AlbumFactory) {
				return AlbumFactory.fetchAll();
			}
		}
	});
});