angular.module('MainCtrl', []).controller('MainController', function($scope,$window) {

	$scope.tagline = 'Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth!';

	var window = angular.element($window);
	window.bind('scroll', function ( ) {
		var scroll = window.scrollTop();
		if(scroll> 292 || scroll === undefined){
			$scope.data1 = true;
			$("#div3").delay(10000).fadeIn();
		}else{
			$scope.data1 = false;
		}

		//console.log('scroll-----',scroll);
		$scope.$apply();
	});

});