library
    .controller('LibraryController', function($scope, Authors, Books) {
        Authors.query().$promise.then(function(data) {
            $scope.authors = data;
        });
        Books.query().$promise.then(function(data) {
            $scope.books = data;
        });
});