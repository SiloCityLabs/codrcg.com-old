app.service('GunService', function ($http, $q) {
	this.getInfo = function(data){
		var deferred = $q.defer();
		var results = $http.post("/infinite-warfare/includes/send/gun-levels/getInfo.php", $.param({data:data}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};

	this.setInfo = function (data) {
		var deferred = $q.defer();
		var results = $http.post("/infinite-warfare/includes/send/gun-levels/setInfo.php", $.param({data: data}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function (data, status, headers, config) {
			deferred.reject(status);
		});
		/* results */

		return deferred.promise;
	};
});
