<?php 
	/* Protect this file from being called alone */
	if(!isset($clean)) exit();
?>

<div class='text-center' ng-hide="pagCtrl.ListInfo.TotalPages < 2 || !pagCtrl.data.IsPaginated">
	<ul class='pagination pagination-sm'>
		<li class="prev hidden-xs" ng-class="{ 'disabled': pagCtrl.ListInfo.CurrentPage == 1, 'pointer': pagCtrl.ListInfo.CurrentPage > 1 }">
			<a ng-click="pagCtrl.ListInfo.CurrentPage == 1 || pagCtrl.liveChange('page1')" tooltip-placement="bottom" tooltip="{{pagCtrl.ListInfo.CurrentPage == 1 ? '':'First Page'}}" ng-disabled="pagCtrl.ListInfo.CurrentPage == 1">
				<i class="fa fa-angle-double-left"></i>
			</a>
		</li>
		<li class="prev" ng-class="{ 'disabled': pagCtrl.ListInfo.CurrentPage == 1, 'pointer': pagCtrl.ListInfo.CurrentPage > 1 }">
			<a ng-click="pagCtrl.ListInfo.CurrentPage == 1 || pagCtrl.liveChange('prev')" tooltip-placement="bottom" tooltip="{{pagCtrl.ListInfo.CurrentPage == 1 ? '':'Previous'}}" ng-disabled="pagCtrl.ListInfo.CurrentPage == 1">
				<i class="fa fa-angle-left"></i>
			</a>
		</li>
		<li data-ng-repeat='paging in [pagCtrl.ListInfo.minPage, pagCtrl.ListInfo.maxPage] | makeRange' class='pointer' ng-class="{ 'active':pagCtrl.ListInfo.CurrentPage == paging }">
			<a ng-click="pagCtrl.liveChange('page'+paging)">{{ ::paging }}</a>
		</li>
		<li class="next" ng-class="{ 'disabled': pagCtrl.ListInfo.CurrentPage == pagCtrl.ListInfo.TotalPages, 'pointer': pagCtrl.ListInfo.CurrentPage < pagCtrl.ListInfo.TotalPages }">
			<a ng-click="pagCtrl.ListInfo.CurrentPage == pagCtrl.ListInfo.TotalPages || pagCtrl.liveChange('next')" tooltip-placement="bottom" tooltip="{{pagCtrl.ListInfo.CurrentPage == pagCtrl.ListInfo.TotalPages ? '':'Next'}}" ng-disabled="pagCtrl.ListInfo.CurrentPage == pagCtrl.ListInfo.TotalPages">
				<i class="fa fa-angle-right"></i>
			</a>
		</li>		
		<li class="next" ng-class="{ 'disabled': pagCtrl.ListInfo.CurrentPage == pagCtrl.ListInfo.TotalPages, 'pointer': pagCtrl.ListInfo.CurrentPage < pagCtrl.ListInfo.TotalPages }">
			<a ng-click="pagCtrl.ListInfo.CurrentPage == pagCtrl.ListInfo.TotalPages || pagCtrl.liveChange('page'+pagCtrl.ListInfo.TotalPages)" tooltip-placement="bottom" tooltip="{{pagCtrl.ListInfo.CurrentPage == pagCtrl.ListInfo.TotalPages ? '':'Last Page'}}" ng-disabled="pagCtrl.ListInfo.CurrentPage == pagCtrl.ListInfo.TotalPages">
				<i class="fa fa-angle-double-right"></i>
			</a>
		</li>	
	</ul>
</div><!-- #pageBtns -->