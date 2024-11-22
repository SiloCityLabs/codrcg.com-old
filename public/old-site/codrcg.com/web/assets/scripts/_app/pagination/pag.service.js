app.service('paginationService', function ($http, $q) {
	/* Get Query String parameters */
	function getParameterByName(name) {
		var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
		return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}
	/* Get all get urls and return them in an object */
	function getUrlVars(){
        var vars = new Object(), hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++){
                hash = hashes[i].split('=');  
                vars[hash[0]] = hash[1];                       
        }
        return vars;
	}
	
     this.Pagination = function(trigger,url,data){
		dataObj = new Object();
     	/* Get the current href */
		curr_url = window.location.href;
		curr_url = curr_url.split('.com/')[1];
		
		dataObj.Page = 1;
		/* Get all data */
		angular.forEach(data, function(value, key) { dataObj[key] = value; });
     	    	
     	/* Get all url data */
     	dataObj.urlString = '';
		
		if(trigger == 'load'){
			url = getUrlVars();
			delete url.Page;
		}
		angular.forEach(url, function(value, key) { 
			dataObj[key] = value; 
			if(value){ dataObj.urlString += '&'+key+'='+value; }
		});
     	
     	/* If isPaginated And Length is undefined */
		if(!dataObj.Length && dataObj.IsPaginated){ 
			dataObj.Length = data.MinLength; 
			url.Length = ''+data.MinLength+''; 
		}else if (dataObj.IsPaginated){
			if(isNaN(dataObj.Length)){
				dataObj.urlString = dataObj.urlString.replace('&Length='+dataObj.Length,'');
				dataObj.Length = data.MinLength;
				url.Length = ''+data.MinLength+'';
			}else if(url.Length == data.MinLength){ dataObj.urlString = dataObj.urlString.replace('&Length='+data.MinLength,''); }
		}else if(!dataObj.IsPaginated){
			dataObj.Length = '';
		}

		if(trigger.indexOf("page") !=-1 && dataObj.IsPaginated){ dataObj.Page = trigger.replace("page", ""); }
		/* TODO: Update sorting */
  		else if(trigger.indexOf("sort:") !=-1){
  			var sort_id = trigger.replace("sort:", ""); 
  			$('th.pointer').not('#'+sort_id).find('i').attr('class','fa fa-sort');
  			dataObj.Page = 1;
  			if($('#'+sort_id).find('i').hasClass('fa-sort')){
  				$('#'+sort_id).find('i').attr('class','fa fa-sort-asc');
  				dataObj.Sort = sort_id+' ASC';
  			}else if($('#'+sort_id).find('i').hasClass('fa-sort-asc')){
  				$('#'+sort_id).find('i').attr('class','fa fa-sort-desc');
  				dataObj.Sort = sort_id+' DESC';
  			}else{
  				$('#'+sort_id).find('i').attr('class','fa fa-sort');
  				dataObj.Sort = '';
  			}  			
  		}else if(dataObj.IsPaginated){			
			if (window.location.href.indexOf("?Page=") >= 0) {
				dataObj.Page = getParameterByName('Page');
				if(dataObj.Page == '' || isNaN(dataObj.Page)){ dataObj.Page = 1; }		
			}
			if(trigger == 'next'){ 			dataObj.Page = parseInt(dataObj.Page) + 1; }
			else if(trigger == 'prev'){ 	dataObj.Page = parseInt(dataObj.Page) - 1; }
			else if(trigger == 'filter'){ 	dataObj.Page = 1; }
			else if(trigger == 'JumpTo'){ 	dataObj.Page = dataObj.JumpTo; }
		}
		
		if(!dataObj.IsPaginated){
			dataObj.Length = '';
			dataObj.Page = 1;			
		}

		var deferred = $q.defer();
		var results = $http.post(dataObj.Modulelist, $.param({dataObj: JSON.stringify(dataObj)}), {headers : {'Content-Type': 'application/x-www-form-urlencoded'}});

		results.success(function (data, status, headers, config) {
			if(dataObj.IsDev == 1){ console.log(data);}  	
			if(dataObj.IsPaginated){ 
				data.jsondata.url = url; 
				var new_url = dataObj.Module+"?Page="+dataObj.Page; 
				if(data.urlString){ new_url += data.urlString; }else{ new_url += dataObj.urlString; }
			}
			
			if (data.Success) {
				if(data.jsondata['Count'] > 0 && dataObj.IsPaginated){
					data.jsondata['CurrentPage'] = dataObj.Page;
					/* Get the total page count */
					data.jsondata['TotalPages'] = Math.ceil(data.jsondata['Count']/dataObj.Length);
					/* Get the start and end of the records */
					data.jsondata['Start'] = (dataObj.Page < 2 ? 1: (dataObj.Page-1)*dataObj.Length+1);
					var tmpEnd = parseInt(data.jsondata['Start'],10)+parseInt(dataObj.Length,10)-1;
					data.jsondata['End'] = (tmpEnd > data.jsondata['Count'] ? data.jsondata['Count']:tmpEnd);
					/* Create jump to select */
					data.jsondata['JumpPages'] = [];
					for(var i = 1; i <= data.jsondata['TotalPages']; i++){ data.jsondata['JumpPages'].push({id:i}); }

				/************** START of Get the paging data **************/
					/* If enquire isset check size for pagination btn count */
					pageInc = 3,
					maxPageBtns = 7;

					data.jsondata['minPage'] = parseInt(dataObj.Page) - pageInc;
	        		data.jsondata['maxPage'] = parseInt(dataObj.Page) + pageInc;
					var count = 0;
	        		
	        		if(data.jsondata['minPage'] >= 1){
	        			/* If page is greater than 3 */
						if(data.jsondata['maxPage'] > data.jsondata['TotalPages']){
							/* If maxpage is greater than total pages */							
							data.jsondata['maxPage'] = parseInt(data.jsondata['TotalPages']);
							data.jsondata['minPage'] = (data.jsondata['TotalPages']-maxPageBtns > 0 ? data.jsondata['TotalPages']-maxPageBtns:1);
						}
					}else{
						/* If page is the same or less than the number pageInc is set to */
						data.jsondata['minPage'] = 1;
						data.jsondata['maxPage'] = (maxPageBtns > data.jsondata['TotalPages'] ? data.jsondata['TotalPages']:maxPageBtns);
					}
				/************** END of Get the paging data **************/
				}
				else if(dataObj.IsPaginated){ data.jsondata['Count'] = 0; data.jsondata['TotalPages'] = 0; }
				deferred.resolve(data.jsondata);
			}else{
				data.jsondata['Count'] = 0;
				data.jsondata['TotalPages'] = 0;
				deferred.resolve('');
			}
			/* Check if the urls match */
			if('/'+curr_url != new_url && dataObj.IsPaginated){
				if (typeof history.pushState === "undefined") {
					// Refresh the page to the new URL if pushState not supported
					localStorage.setItem("popstate", 'true');
					location.href = new_url;
				}
				else{ window.history.pushState({page: dataObj.Page}, "Title", new_url); }
			}
		}).error(function(data, status, headers, config){
			deferred.reject(status);
		});/* results */
     	
     	return deferred.promise;
	};/* Pagination */
});