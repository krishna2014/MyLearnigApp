var application = angular.module('learningApp', [ 'ngRoute' ]);

application.controller('headerController', function ($scope, $http) {
    $scope.header = { name: 'header.html', url: '/html/header.html' };

    //Get the list of items to be displayed on dashboard header
    $http.get('http://localhost:3000/learnersStop/api/v1/getHeaderList')
        .success(function (response) {
            // console.log(JSON.stringify(response.items));
            $scope.headerListItems = response.items;
        });
});

application.controller('centerController', function ($scope) {
    $scope.centerContent = { name: 'centerContent.html', url: '/html/centerContent.html' };
});

application.controller('footerController', function ($scope) {
    $scope.footer = { name: 'footer.html', url: '/html/footer.html' };
});

application.config(function ($routeProvider) {
    $routeProvider
        .when('/learn', {
            templateUrl: '/html/Angular8_ng-routing.html'
        })
        .when('/hello', {
            templateUrl: 'wish.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// .when('/', {
// 		templateUrl: 'index.html'
// 	})