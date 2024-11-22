<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);
	$seoArr['title'] = 'Zombies Challenges - '.BO2_Title;
	$seoArr['desc'] = 'A list of zombies challenges to challenge and add a new level of fun to Black Ops 2 zombies.';
	$seoArr['keywords'] = 'COD Black Ops 2 Zombies, COD Blops 2 Zombies, blops 2 zombies, blops 2, black ops 2, ops 2 zombies,
		ops 2 zombies, zombies, treyarch, treyarch zombies, zombies challenges';
	$seoArr['url'] = '//'.SYS_URL_PATH.'/'.BO2_Folder.'/zombie-challenges';

	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Zombie Challenges</span>
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
				BO2_Folder.'/assets/scripts/pages/zombie-challenges/main.controller.js'
			]
		]);
	?>
	<div ng-controller='ZombiesCtrl as myCtrl'>
		<div class="row" ng-controller='PagCtrl as pagCtrl' ng-init='pagCtrl.initialize({"Module":"zombie-challenges","Modulelist":"includes/send/zombie-challenges/pagination-exec.php"})'>
			<div class="col s12">
				<h1 class="text-center">Zombies Challenges</h1>
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
							<th>Instructions</th>
							<th>Maps</th>
						</tr>
						</thead>
						<tbody>
						<tr ng-repeat='jsonInfo in pagCtrl.ListInfo.Info'>
							<td>
								<button ng-click='myCtrl.ViewChallenge(jsonInfo)' class="btn btn-default"><i class="fa fa-eye"></i> View</button>
							</td>
							<td>{{ jsonInfo.Name }}</td>
							<td><span ng-bind-html='jsonInfo.Instructions | truncate:50'></span></td>
							<td>{{ jsonInfo.Maps }}</td>
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
		<?php require ('includes/pagesections/zombie-challenges/messageModal.php'); ?>
	</div>
<?php require_once ('includes/pagesections/_bottom.php'); ?>