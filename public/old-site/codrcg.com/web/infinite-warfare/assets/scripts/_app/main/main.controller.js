app.controller('MainCtrl', function (MainService,$scope,$timeout) {
	$(".button-collapse").sideNav();
	var _this = this;
	$scope.data = {};
	$scope.settingsData = {'roll':[],'dlc':[]};
	$scope.maxLevel = 55;
	$scope.NotLoggedInInfo = 'This information is saved in your browser, so using a new browser or clearing your browser\'s data will reset this unless you have an <a href="/register">account</a>.';
	$scope.LoggedInInfo = 'All settings will save to your account for easy usage between visits.';

	/* Get initial info */
	_this.InitialInfo = function(){
		promise = MainService.InitialInfo();

		promise.then(function(value) {
      		$scope.settingsData.roll = value.IW_RollSettings;
      		$scope.settingsData.dlc = value.IW_DlcSettings;
      		$scope.settingsData.Level = parseInt(value.IW_Level);
      		$scope.isLoggedIn = value.isLoggedIn;
      		$scope.DLC = value.DLC;
      		$scope.Settings = value.Settings;
			/* Create a copy of settings */
      		$scope.copySettingsData = angular.copy($scope.settingsData);
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};

	$timeout( function(){ _this.InitialInfo(); }, 1);

  	/* Dealing with roll/dlc settings */
  	$scope.cancelSettings = function(modal){
		if($scope.copySettingsData != undefined){
			$scope.settingsData = angular.copy($scope.copySettingsData);
		}else{
			$scope.settingsData = {'roll':{},'dlc':{},'Level':$scope.maxLevel};
		}
		$('#'+modal).modal('open');
  	};

  	$scope.toggle = function (item, list) {
		if(!$scope.settingsData[list]){ $scope.settingsData[list] = []; }

    	var idx = $scope.settingsData[list].indexOf(item);
        if (idx > -1) $scope.settingsData[list].splice(idx, 1);
        else $scope.settingsData[list].push(item);
    };
    $scope.exists = function (item, list) {
		if(list != undefined) {
			return list.toString().indexOf(item) > -1;
		} else {
			return false;
		}
	};

  	$scope.validateSettings = function(value){
		$scope.settingsData.roll = ($scope.settingsData.roll ? $scope.settingsData.roll : []);
  		var classSettings = ['Yprimary','Ysecondary','Youmb','Ylethal','Ytactical'];
		if($scope.settingsData.roll.indexOf(value) <= -1){
			if(value == 'Youmb'){
				var index = $scope.settingsData.roll.indexOf('Yprimary');
				if(index > -1){$scope.settingsData.roll.splice(index, 1);}
				var index = $scope.settingsData.roll.indexOf('Ysecondary');
				if(index > -1){$scope.settingsData.roll.splice(index, 1);}
				var index = $scope.settingsData.roll.indexOf('Ysupergun');
				if(index > -1){$scope.settingsData.roll.splice(index, 1);}
			}else if(value == 'Ysecondary' || value == 'Yprimary'){
				var index = $scope.settingsData.roll.indexOf('Youmb');
				if(index > -1){$scope.settingsData.roll.splice(index, 1);}
				var index = $scope.settingsData.roll.indexOf('Ysupergun');
				if(index > -1){$scope.settingsData.roll.splice(index, 1);}
			}else if(value == 'Ysupergun'){
				/* remove anything that would give a slot to the class if they choose supergun setting */
				angular.forEach(classSettings, function(value, key) {
					var index = $scope.settingsData.roll.indexOf(value);
					if(index > -1){$scope.settingsData.roll.splice(index, 1);}
				});
			}else if(classSettings.indexOf(value)  > -1){
				/* remove supergun setting if they choose anything that would give a slot to the class */
				var index = $scope.settingsData.roll.indexOf('Ysupergun');
				if(index > -1){$scope.settingsData.roll.splice(index, 1);}
			}
		}
	};

	$scope.saveSettings = function(type){
		$scope.settingsData.SettingType = type;
		promise = MainService.saveSettings($scope.settingsData);

		promise.then(function(value) {
      		$scope.copySettingsData = angular.copy(value.settingsData);
    	}, function(reason) {
      		console.log('error'); console.log(reason);
    	});
  	};

	$scope.Join_ID = '';

	$scope.saveClass = function () {
		if ($scope.Join_ID == '') {
			promise = MainService.saveClass($scope.ClassID);
		} else {
			promise = MainService.removeClass($scope.ClassID);
		}

		promise.then(function (value) {
			if ($scope.Join_ID == '') {
				Materialize.toast('Class has been saved!', 1000);
			} else {
				Materialize.toast('Class has been removed!', 1000);
			}
			$scope.Join_ID = value.Join_ID;
		}, function (reason) {
			console.log('error');
			console.log(reason);
		});
	};
});
