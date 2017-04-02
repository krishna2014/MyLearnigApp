var application = angular.module('learningApp', ['ngRoute']);

application.controller('headerController', function($scope, $http) {
    $scope.header = {name:'header.html', url:'/html/main.html'};
	
	//Get the list of items to be displayed on dashboard header
	$http.get('http://localhost:3000/getHeaderList')
	.success(function(response) {
		console.log(JSON.stringify(response.items));
		$scope.headerListItems = response.items;
	});
});

application.controller('footerController', function($scope) {
    $scope.footer = {name:'fooetr.html', url:'/html/footer.html'};
});

application.config(function($routeProvider) {
	$routeProvider
	.when('/learn', {
		templateUrl: 'learn.html'
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