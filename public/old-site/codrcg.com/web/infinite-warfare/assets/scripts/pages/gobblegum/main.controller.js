app.controller('GobblegumCtrl', function (MainService,$scope,$timeout) {
	var _this = this;
	_this.data = {};
	_this.InitialLoad = true;

	_this.ViewGum = function(jsonInfo){
		$scope.ModalInfo = jsonInfo;
		$('#FullMessageModal').openModal();
  	};
});
