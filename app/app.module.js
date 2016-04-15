var Bistro = angular.module('Bistro', ['ngRoute','ngTouch']);
Bistro.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',
        {
            templateUrl: 'components/home/home.html'
        })
        .when('/about',
        {
            templateUrl: 'components/about.html'
        })
        .when('/wine',
        {
            templateUrl: 'components/wine/wine.html'
        })
        .when('/gift',
        {
            templateUrl: 'components/gift/gift.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
Bistro.controller('personCtrl', function($scope) {
   
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});
