app.controller('GunCtrl', function (GunService,MainService,$scope,$timeout) {
	var _this = this;
	_this.data = {};
	_this.InitialLoad = true;

	_this.getInfo = function(){
		promise = GunService.getInfo(_this.data);

		promise.then(function(value) {
			_this.Guns = value.Guns;
			_this.data = value.Info;
			
			$timeout( function(){ _this.InitialLoad = false; }, 10); 
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};

  	$timeout( function(){ _this.getInfo(); }, 10);

	_this.setInfo = function () {
		_this.InitialLoad = true;
		promise = GunService.setInfo(_this.data);

		promise.then(function (value) {
			$timeout(function () { _this.InitialLoad = false; }, 10);
		}, function (reason) {
			console.log('error');
			console.log(reason);
		});
	};
});
