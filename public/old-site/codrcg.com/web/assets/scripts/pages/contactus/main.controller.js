app.controller('ContactCtrl', function (ContactService,$scope,$timeout) {
	var _this = this;
	_this.data = {};

	_this.sendContactInfo = function(){
		console.log(_this.data);
		promise = ContactService.sendContactInfo(_this.data);

		promise.then(function(value) {
			Materialize.toast('Your message has been sent!', 1000);
			$scope.myForm.$setPristine();
			_this.data = {};
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};
});
