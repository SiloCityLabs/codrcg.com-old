app.controller('ClassCtrl', function (ClassService,MainService,$scope,$timeout) {
	var _this = this;
	$scope.isClassPage = true;
	_this.data = {};
	_this.InitialLoad = true;
	_this.btnLock = false;

	_this.getClassInfo = function() {
		if(_this.data.ID){
			promise = ClassService.getClassInfo(_this.data);
		}else{
			_this.rollClass();
		}

		promise.then(function(value) {
			console.log(value);
			if(value.Class === false){
				window.location.href = '/modern-warfare/class';
			}
			_this.Class = value.Class;

			$timeout( function(){ _this.InitialLoad = false; }, 10);
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};

  	$timeout( function(){ _this.getClassInfo(); }, 10);

  	_this.rollClass = function(){
		_this.InitialLoad = true;
		promise = MainService.createClass($scope.data);

		promise.then(function(value) {
			_this.data.ID = value.Class.ID;
			_this.Class = value.Class;
			window.history.pushState({class: value.ClassID}, "COD Modern Warfare", '/modern-warfare/class/'+value.Class.ID);
			_this.InitialLoad = false;
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};

  	_this.saveClass = function(){
  		_this.btnLock = true;
		promise = ClassService.saveClass(_this.Class);

		promise.then(function(value) {
			_this.Class.Join_ID = value.Join_ID;
			_this.btnLock = false;
			Materialize.toast('Class Has been saved!', 1000);
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};

  	_this.removeClass = function(){
  		_this.btnLock = true;
		promise = ClassService.removeClass(_this.Class);

		promise.then(function(value) {
			_this.Class.Join_ID = null;
			_this.btnLock = false;
			Materialize.toast('Class Has been removed!', 1000);
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};
});
