app.service('UnlockService', function ($http, $q) {
	this.getUnlockInfo = function(data){
		var deferred = $q.defer();
		var results = $http.post("/infinite-warfare/includes/send/my-unlocks/getUnlockInfo.php", $.param({data:data}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};
	
	this.setUnlockInfo = function(data){
		var deferred = $q.defer();
		var results = $http.post("/infinite-warfare/includes/send/my-unlocks/setUnlockInfo.php", $.param({data:data}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};
});
