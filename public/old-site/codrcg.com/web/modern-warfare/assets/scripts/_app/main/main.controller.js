// window.onpopstate = function(e){
	// window.location.reload();
// };

app.controller('MainCtrl', function (MainService,$scope,$timeout) {
	$(".button-collapse").sideNav();
	var _this = this;
	$scope.data = {};
	$scope.settingsData = {'roll':[]};
	$scope.maxLevel = 55;
	$scope.NotLoggedInInfo = 'This information is saved in your browser, so using a new browser or clearing your browser\'s data will reset this unless you have an <a href="/register">account</a>.';
	$scope.LoggedInInfo = 'All settings will save to your account for easy usage between visits.';

	/* Get initial info */
	_this.InitialInfo = function(){
		promise = MainService.InitialInfo();

		promise.then(function(value) {
      		$scope.settingsData.roll = value.MW_RollSettings;
      		$scope.settingsData.dlc = value.MW_DlcSettings;
      		$scope.settingsData.Level = parseInt(value.MW_Level);
      		$scope.isLoggedIn = value.isLoggedIn;
      		$scope.DLC = value.DLC;
      		$scope.Settings = value.Settings;
      		$scope.TotalClasses = value.TotalClasses;
      		$scope.Menu = value.Menu;
      		$scope.AccountMenu = value.AccountMenu;
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
		if (list != undefined) {
			return list.indexOf(item) > -1;
		} else {
			return false;
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