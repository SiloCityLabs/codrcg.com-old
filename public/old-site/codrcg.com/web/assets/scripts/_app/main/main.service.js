app.service('MainService', function ($http, $q) {
	this.InitialInfo = function(){
		var deferred = $q.defer();
		var results = $http.post("/includes/send/InitialInfo.php");

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};
});
