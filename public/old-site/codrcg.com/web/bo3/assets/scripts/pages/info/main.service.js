app.service('InfoService', function ($http, $q) {
	this.getPageInfo = function(data){
		var deferred = $q.defer();
		var results = $http.post("includes/send/info/getPageInfo.php", $.param({data:data}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};
});
