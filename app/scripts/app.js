angular.module('jtbdApp', [ 'ngRoute', 'ngSanitize' ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/edit', {
                templateUrl: 'views/edit.html',
                controller: 'EditCtrl'
            })
            .when('/table', {
                templateUrl: 'views/table.html',
                controller: 'TableCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
