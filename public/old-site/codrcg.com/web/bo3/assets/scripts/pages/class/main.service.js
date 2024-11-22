app.service('ClassService', function ($http, $q) {
	this.getClassInfo = function(data){
		var deferred = $q.defer();
		var results = $http.post("/includes/send/class/getClassInfo.php", $.param({data:data}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};
	
	this.saveClass = function(data){
		var deferred = $q.defer();
		var results = $http.post("/includes/send/class/saveClass.php", $.param({data:data}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};
	
	this.removeClass = function(data){
		var deferred = $q.defer();
		var results = $http.post("/includes/send/class/removeClass.php", $.param({data:data}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};
});
