<?php 
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>

<div class="col-sm-2" ng-hide="pagCtrl.ListInfo.TotalPages < 2 || !pagCtrl.data.IsPaginated">
	<label>Page</label>
	<select class="form-control input-sm" ng-model='pagCtrl.data.JumpTo' ng-options="pages.id for pages in pagCtrl.ListInfo.JumpPages" ng-change="pagCtrl.liveChange('JumpTo')"></select>
</div>	