app.controller('ZombiesCtrl', function (MainService,$scope,$timeout) {
	var _this = this;
	_this.data = {};
	_this.InitialLoad = true;

	_this.ViewChallenge = function(jsonInfo){
		$scope.ModalInfo = jsonInfo;
		$('#FullMessageModal').openModal();
  	};
});
