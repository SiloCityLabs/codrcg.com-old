<?php 
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>

<div class="col-sm-2" ng-hide="pagCtrl.ListInfo.Count < 10 || !pagCtrl.data.IsPaginated">
	<label>Show</label>
	<select class='form-control' ng-model='pagCtrl.url.Length' ng-change="pagCtrl.liveChange('filter')">
		<option value='10' selected>10</option>
		<option value='25'>25</option>
		<option value='50'>50</option>
		<option value='100'>100</option>
	</select> 
</div>