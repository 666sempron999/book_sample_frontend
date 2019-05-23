angular
    .module('appRoutes', ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'library',
        url: '/',
        templateUrl: 'public/components/library/templates/library.template',
        controller: 'LibraryController'
    });

    $urlRouterProvider.otherwise('/');
}]);