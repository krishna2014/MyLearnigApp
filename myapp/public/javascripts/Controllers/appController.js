var application = angular.module('learningApp', ['ngRoute']);

application.controller('headerController', function ($scope, $http) {
    $scope.header = {
        name: 'header.html',
        url: '/html/header.html'
    };

    //Get the list of items to be displayed on dashboard header
    $http.get('http://localhost:3000/learnersStop/api/v1/getHeaderList')
        .then(function (successResponse) {
                // console.log(successResponse);
                console.log(JSON.stringify(successResponse.data));
                $scope.headerListItems = successResponse.data.items;

            },
            function (errResponse) {
                $scope.headerListItems = null;
            }
        );
});

application.controller('centerController', function ($scope) {
    $scope.centerContent = {
        name: 'centerContent.html',
        url: '/html/centerContent.html'
    };
});

application.controller('footerController', function ($scope) {
    $scope.footer = {
        name: 'footer.html',
        url: '/html/footer.html'
    };
});

application.config(function ($routeProvider) {
    $routeProvider
        .when('/learn', {
            templateUrl: '/html/.html'
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