app.service('MainService', function ($http, $q) {
	this.InitialInfo = function(){
		var deferred = $q.defer();
		var results = $http.post("/modern-warfare/includes/send/InitialInfo.php");

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};

	this.createClass = function(data){
		var deferred = $q.defer();
		var results = $http.post("/modern-warfare/includes/send/createClass.php", $.param({data:data}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};

	this.saveSettings = function(data){
		var deferred = $q.defer();
		var results = $http.post("/modern-warfare/includes/send/saveSettings.php", $.param({data:data}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};

	this.saveClass = function (id) {
		var deferred = $q.defer();
		var results = $http.post("/includes/send/class/saveClass.php", $.param({id: id}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function (data, status, headers, config) {
			deferred.reject(status);
		});
		/* results */

		return deferred.promise;
	};

	this.removeClass = function (id) {
		var deferred = $q.defer();
		var results = $http.post("/includes/send/class/removeClass.php", $.param({id: id}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function (data, status, headers, config) {
			deferred.reject(status);
		});
		/* results */

		return deferred.promise;
	};
});
