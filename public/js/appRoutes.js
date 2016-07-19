// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // home page
        .state('/', {
            url: '/',
            templateUrl: 'index.html'
        })

}]);
