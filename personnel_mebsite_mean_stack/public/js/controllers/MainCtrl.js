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
		$scope.images = ['http://res.cloudinary.com/symplocus/raw/upload/v1477306807/sai_1.6_exp_1_osx5kl.pdf' , 'http://res.cloudinary.com/symplocus/raw/upload/v1477306863/sai_1.6_exp_2_xwu76p.pdf'];
		$scope.openLightboxModal = function (index) {
			Lightbox.openModal($scope.images, index);
		};
	});

});