angular.module('wp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
 
    $routeProvider
    .when('/', {
        templateUrl: localized.partials + 'main.html',
        controller: 'Main'
    })
    .when('/:slug', {
        templateUrl: localized.partials + 'content.html',
        controller: 'Content'
    })
    .otherwise({
        redirectTo: '/'
    });
})
.controller('Main', function($scope, $http, $routeParams) {
    $http.get('/wordpress/recipes/index.php/wp-json/wp/v2/posts').then(function(success){
    	console.log('success',success);
        $scope.posts = success.data;
    }, function (error){
    	console.log('error',error);
    });
})
.controller('Content',
        ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
            $http.get('/wordpress/recipes/index.php/wp-json/wp/v2/posts').then(function(success){
    	console.log('success',success);
        $scope.posts = success.data[0];
    }, function (error){
    	console.log('error',error);
    });
        }
    ]
);