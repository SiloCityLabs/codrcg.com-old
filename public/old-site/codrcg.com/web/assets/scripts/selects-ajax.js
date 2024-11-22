function showStates(area, memID) {
    /* Enable State */
   if($('#stateP').length > 0){
        $('#stateP select').removeAttr('readonly'); 
   }
   
    /* get countryid */
    var value = $("#"+area).val(); 
    
    $.ajax({
		type: "POST",
		url: "includes/_fw/functions/select/getAjaxList.php",
		data: {countryid: value, memID:memID},
		dataType: "html",
		success: function (data) { 
			$("#stateP select").html(data);	
			$("#stateP select:contains(No states Exist)").html('');
			
			if($("#stateP select").html() == ''){
				$('#stateP select').html(null);
				$('#cityP select').html(null);
		        $('#stateP select').prop('readonly', true); 
		        $('#cityP select').attr('readonly', true); 
			}else{
				$('#stateP .select2-chosen').html('Select a State');
				/* Enable City */
			   	if($('#addCity').length > 0){
			   		showCities("stateP select", memID);
			        $('#cityP select').removeAttr('readonly'); 
			   	}else{
					$('#cityP .select2-chosen').html('Select a City');
				}
			}
	    	
		}/* success */
    });/* ajax */
}/* showStates */

function showCities(area, memID) {
   /* Enable City */
   if($('#cityP').length > 0){
        $('#cityP select').removeAttr('readonly'); 
   }
    /* Get State ID */
    var value = $("#"+area).val();
    
    $.ajax({
		type: "POST",
		url: "includes/_fw/functions/select/getAjaxList.php",
		data: {stateid: value, memID:memID},
		dataType: "html",
		success: function (data) { 
	    	$("#cityP select").html(data);
	    	$("#cityP select:contains(No cities Exist)").html('');
	    	$('#cityP .select2-chosen').html('Select a City');
			
			if($("#cityP select").html() == ''){
				$('#cityP select').html(null);
		        $('#cityP select').removeAttr('readonly'); 
			}
		}/* success */
    });/* ajax */
}/* showCities */