app.controller('InfoCtrl', function (InfoService,$scope,$timeout) {
	var _this = this;
	_this.data = {};
	_this.InitialLoad = true;

	_this.getPageInfo = function(){
		promise = InfoService.getPageInfo(_this.data);

		promise.then(function(value) {
			_this.Guns = value.Guns;
			_this.Perks = value.Perks;
			_this.Streaks = value.Streaks;
			_this.Equipment = value.Equipment;
			$timeout( function(){ _this.InitialLoad = false; }, 10); 
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};

  	$timeout( function(){ _this.getPageInfo(); }, 10); 
});
