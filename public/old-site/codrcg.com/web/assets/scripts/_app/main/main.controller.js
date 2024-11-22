/* window.onpopstate = function(e){
	window.location.reload();
};*/

app.controller('MainCtrl', function (MainService,$scope,$timeout) {
	$(".button-collapse").sideNav();
	var _this = this;
	$scope.data = {};
	
	/* Get initial info */
	_this.InitialInfo = function(){
		promise = MainService.InitialInfo();

		promise.then(function(value) {
			console.log(value);
      		$scope.Menu = value.Menu;
      		$scope.ClassCount = value.ClassCount;
			console.log($scope.ClassCount);
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};

	$timeout( function(){ _this.InitialInfo(); }, 1);
});
