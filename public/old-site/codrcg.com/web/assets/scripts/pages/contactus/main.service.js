app.service('ContactService', function ($http, $q) {
	this.sendContactInfo = function(data){
		var deferred = $q.defer();
		var results = $http.post("includes/send/contactus/sendContactInfo.php", $.param({data:data}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */

		return deferred.promise;
	};
});
