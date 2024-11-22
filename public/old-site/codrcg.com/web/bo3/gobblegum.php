<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);
	$seoArr['title'] = 'Gobblegum - '.BO3_Title;
	$seoArr['desc'] = 'A list of all the gobblegum. Easy place to view what each and every gobblem gum does in black ops 3 zombies.';
	$seoArr['keywords'] = 'COD Black Ops 3 Zombies, COD Blops 3 Zombies, blops 3 zombies, blops 3, black ops 3, ops 3 zombies, 
		zombies, treyarch, treyarch zombies, gobblegum, black ops 3 gobblegum, bo3 gobblegum, bo3 gobblegum list';
	$seoArr['url'] = '//'.SYS_URL_PATH.'/'.BO3_Folder.'/gobblegum';

	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Gobblegum</span>
								</a>
							</div>';
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<?php
		echo minify_builder ([
			'JS_ATTR' => 'defer',
			'files' => [
				'assets/scripts/_app/pagination/pag.controller.js',
				'assets/scripts/_app/pagination/pag.service.js',
				BO3_Folder.'/assets/scripts/pages/gobblegum/main.controller.js'
			]
		]);
	?>
	<div ng-controller='GobblegumCtrl as myCtrl'>
		<div class="row" ng-controller='PagCtrl as pagCtrl' ng-init='pagCtrl.initialize({"Module":"gobblegum","Modulelist":"includes/send/gobblegum/pagination-exec.php"})'>
			<div class="col s12">
				<h1 class="text-center">Gobblegum</h1>
				<?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
				<div class="row">
					<div class="col s6">
						<label>Search</label>
						<input ng-model="pagCtrl.url.Search" ng-model-options="{debounce: 1000}" ng-change='pagCtrl.liveChange("filter")' type='text' class='form-control'>
					</div>
				</div>
				<div class="divider" ng-cloak ng-hide='pagCtrl.RowsLoading.ListInfo'></div>
				<div ng-show='pagCtrl.RowsLoading.ListInfo'>
					<?php require_once ('../includes/pagesections/pagination/loading_spinner.php'); ?>
				</div>
				<div class="section" ng-cloak ng-hide='pagCtrl.RowsLoading.ListInfo'>
					<table class="responsive-table centered striped">
						<thead>
						<tr>
							<th>Actions</th>
							<th>Name</th>
							<th>Description</th>
							<th>Trigger</th>
							<th>Lasts</th>
						</tr>
						</thead>
						<tbody>
						<tr ng-repeat='jsonInfo in pagCtrl.ListInfo.Info'>
							<td>
								<button ng-click='myCtrl.ViewGum(jsonInfo)' class="btn btn-default"><i class="fa fa-eye"></i> View</button>
							</td>
							<td>{{ jsonInfo.Name }}</td>
							<td><span ng-bind-html='jsonInfo.Description | truncate:50'></span></td>
							<td>{{ jsonInfo.Trigger }}</td>
							<td>{{ jsonInfo.Lasts }}</td>
						</tr>
						<tr ng-show='pagCtrl.ListInfo.Count == 0'>
							<td colspan="100%" style="text-align:center !important;">No Rows Found</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div ng-cloak ng-hide="pagCtrl.RowsLoading.ListInfo">
					<div ng-hide='pagCtrl.ListInfo.Count == 0'> Showing {{ pagCtrl.ListInfo.Start }} to {{ pagCtrl.ListInfo.End }} of {{ pagCtrl.ListInfo.Count }}</div>
					<?php require_once ('../includes/pagesections/pagination/paging_btns.php'); ?>
				</div>
			</div>
		</div>
		<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
		<?php require ('includes/pagesections/gobblegum/messageModal.php'); ?>
	</div>
<?php require_once ('includes/pagesections/_bottom.php'); ?>