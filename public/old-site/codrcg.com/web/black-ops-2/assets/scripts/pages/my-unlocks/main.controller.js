app.controller('UnlockCtrl', function (UnlockService,$scope,$timeout) {
	var _this = this;
	_this.data = {};
	_this.InitialLoad = true;
	_this.prestiges = [1,2,3,4,5,6,7,8,9,10];

	_this.getUnlockInfo = function(){
		promise = UnlockService.getUnlockInfo(_this.data);

		promise.then(function(value) {
			console.log(value);
			_this.mergedEquip = value.mergedEquip;
			_this.data.Unlock = value.Unlocks;
			$timeout( function(){ _this.InitialLoad = false; }, 10);
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};

  	$timeout( function(){ _this.getUnlockInfo(); }, 100);

	_this.setUnlockInfo = function(){
		_this.InitialLoad = true;
		promise = UnlockService.setUnlockInfo(_this.data);

		promise.then(function(value) {
			Materialize.toast('Your unlocks have been updated!', 1000);
			$timeout( function(){ _this.InitialLoad = false; }, 10);
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};
});
