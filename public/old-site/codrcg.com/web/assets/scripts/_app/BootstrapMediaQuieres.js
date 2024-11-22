app.run(function ($rootScope) {
	BootstrapMediaQuieres = function(screenSize){
		if(screenSize < 768){/* xs */
			 $rootScope.$apply(function () { $rootScope.isLG = false; $rootScope.isMD = false; $rootScope.isSM = false; $rootScope.isXS = true;});
		}else if(screenSize >= 768 && screenSize < 992){/* sm */
			$rootScope.$apply(function () { $rootScope.isLG = false; $rootScope.isMD = false; $rootScope.isSM = true; $rootScope.isXS = false;});
		}else if(screenSize >= 992 && screenSize < 1200){/* md */
			$rootScope.$apply(function () { $rootScope.isLG = false; $rootScope.isMD = true; $rootScope.isSM = false; $rootScope.isXS = false;});
		}else if(screenSize >= 1200){/* lg */
			$rootScope.$apply(function () { $rootScope.isLG = true; $rootScope.isMD = false; $rootScope.isSM = false; $rootScope.isXS = false;});
		}
	};
    angular.element(window).on('resize', function () { BootstrapMediaQuieres(window.innerWidth); });
    angular.element(window).on('load', function () { BootstrapMediaQuieres(window.innerWidth); });
});