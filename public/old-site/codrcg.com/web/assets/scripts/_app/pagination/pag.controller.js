app.controller('PagCtrl', function (paginationService,$timeout,$scope) {
	var ScopeName = '';
    var _this = this;
	_this.data = {};  _this.url = {Search:''}; _this.RowsLoading = {}; _this.InitialLoad = {};
	var querycount = 0;

    _this.liveChange = function(trigger){
	    if(trigger == 'load'){ _this.InitialLoad[ScopeName] = true; }
		if((!_this.InitialLoad[ScopeName] && trigger != 'load') || (_this.InitialLoad[ScopeName] && trigger == 'load')){
	    	_this.RowsLoading[ScopeName] = true;
		}

		pagination = paginationService.Pagination(trigger,_this.url,_this.data);

		pagination.then(function(value) {
			if(_this.data['IsDev'] == 1){ console.log(value);}
    		_this[ScopeName] = value;
    		if(trigger == 'load' && _this[ScopeName].url){
    			angular.forEach(_this[ScopeName].url, function(value, key) { _this.url[key] =  _this[ScopeName].url[key] = value; });
    		}

    		if(_this[ScopeName].Count > 0 && _this.data.IsPaginated){ _this.data.JumpTo = _this[ScopeName].JumpPages[(_this[ScopeName].CurrentPage-1)]; }

    		$timeout(function() {
    			_this.RowsLoading[ScopeName] = false; _this.InitialLoad[ScopeName] = false; querycount = 0;
    		}, 10);
    	}, function(reason) {
    		console.log('error'); console.log(reason); _this[ScopeName] = '';
    		$timeout(function() { _this.RowsLoading[ScopeName] = false; _this.InitialLoad[ScopeName] = false; }, 1);
    	});

    };

	_this.initialize = function(dataArr){
		ScopeName = (dataArr['ScopeName']) ? dataArr['ScopeName']:'ListInfo';
		_this.url['Length'] = (dataArr['minLength']) ? dataArr['minLength']:10;
		_this.data['Module'] = (dataArr['Module']) ? dataArr['Module']:'';
		_this.data['Modulelist'] = (dataArr['Modulelist']) ? dataArr['Modulelist']:'';
		_this.data['IsPaginated'] = (dataArr['isPaginated']) == undefined ? 1:dataArr['isPaginated'];
		_this.data['IsDev'] = (dataArr['IsDev']) ? 1:0;
		_this.data['MinLength'] = _this.url.Length;
		if(dataArr['Data']){ angular.forEach(dataArr['Data'], function(value, key) { _this.data[key] = value; }); }
		if(dataArr['Url']){ angular.forEach(dataArr['Url'], function(value, key) { _this.url[key] = value; }); }
		_this.liveChange('load');
	};

    window.setTimeout(function(){
    	var currentLocation = document.URL;
	    window.onpopstate = function (e) {
	    	var newLocation = document.URL;
	    	if(window.location.href.indexOf("?Page=") && currentLocation != newLocation){
	    		window.location.reload();
	    	}
		};
	},1);
});