app.controller('StatsCtrl', function (StatsService,$scope,$timeout) {
	var _this = this;
	_this.data = {};
	_this.InitialLoad = true;

	_this.getStatsInfo = function(){
		promise = StatsService.getStatsInfo(_this.data);

		promise.then(function(value) {
			_this.Monthly = value.Monthly;
			_this.AllTime = value.AllTime;
			_this.Class_Views = value.Cached_BO3_Class_Views;
			_this.Class_Count = value.Cached_BO3_Class_Count;
			_this.Best_User = value.Cached_BO3_Best_User;
			$timeout( function(){ _this.InitialLoad = false; }, 10); 
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};

  	$timeout( function(){ _this.getStatsInfo(); }, 10); 
});
