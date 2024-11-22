<?php
	require('includes/includes.php');
	ob_start("sanitize_page");
	new Session(array(1,2,3));

	$seoArr['title'] = 'My Classes - '.SITE_NAME;
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<?php
		echo minify_builder ([
			'JS_ATTR' => 'defer',
			'BASE' => 'assets',
			'files' => [
				'scripts/angular/angular.min.js',
				'scripts/angular/angular-sanitize.min.js',
				'scripts/angular/angular-animate.min.js',
				'scripts/_app/app.js',
				'scripts/_app/BootstrapMediaQuieres.js',
				'scripts/_app/filters/filters.js',
				'scripts/_app/pagination/pag.controller.js',
				'scripts/_app/pagination/pag.service.js'
			]
		]);
	?>
			<?php require ('includes/pagesections/ads/Ad_top.php'); ?>
	<div class="row" ng-app='MainApp' class="ng-scope">
		<div class="col s12">
			<div class="row" ng-controller='PagCtrl as pagCtrl' ng-init='pagCtrl.initialize({"Module":"myclasses","Modulelist":"includes/send/myclasses/pagination-exec.php"})'>
				<div class="col s12">
					<div class="row">
						<div class="col s6">
							<label>Search</label>
							<input ng-model="pagCtrl.url.Search" ng-model-options="{debounce: 1000}" ng-change='pagCtrl.liveChange("filter")' type='text' class='form-control'>
						</div>
						<div class="row" ng-cloak ng-hide='pagCtrl.RowsLoading.ListInfo'>
							<?php require_once('includes/pagesections/pagination/show_select.php'); ?>
							<?php require_once('includes/pagesections/pagination/jumpto.php'); ?>
						</div>
					</div>
					<div class="divider"></div>
					<div ng-show='pagCtrl.RowsLoading.ListInfo'>
						<?php require_once('includes/pagesections/pagination/loading_spinner.php'); ?>
					</div>
					<div ng-cloak ng-hide="pagCtrl.RowsLoading.ListInfo">
						<table class="responsive-table centered hoverable striped">
							<thead>
								<tr>
									<th>Name</th>
									<th>URL</th>
									<th>Views</th>
									<th>Game</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr ng-repeat='jsonInfo in pagCtrl.ListInfo.Info'>
									<td>{{ jsonInfo.Name }}</td>
									<td>{{ jsonInfo.TinyUrl }}</td>
									<td>{{ jsonInfo.Views }}</td>
									<td><a ng-href="/{{jsonInfo.Path}}/">{{ jsonInfo.Game }}</a></td>
									<td>
										<a ng-href="/{{jsonInfo.Path}}/class?ID={{jsonInfo.ID}}" data-toggle="modal" class="btn"><i class="fa fa-eye"></i> <span class="hidden-xs">View</span></a>
										<a href="#SettingsModal" data-toggle="modal" class="btn"><i class="fa fa-trash"></i> <span class="hidden-xs">Remove</span></a>
									</td>
								</tr>
								<tr ng-show='pagCtrl.ListInfo.Count == 0'>
									<td colspan="100%" style="text-align:center !important;">No Rows Found</td>
								</tr>
							</tbody>
						</table>
					</div><!-- /.widget box -->
					<div ng-cloak ng-hide="pagCtrl.RowsLoading.ListInfo">
						<div ng-hide='pagCtrl.ListInfo.Count == 0'> Showing {{ pagCtrl.ListInfo.Start }} to {{ pagCtrl.ListInfo.End }} of {{ pagCtrl.ListInfo.Count }}</div>
						<?php require_once('includes/pagesections/pagination/paging_btns.php'); ?>
					</div>
				</div><!-- /.col-md-12-->
			</div><!-- /.row -->
		</div>
	</div>
	<?php require ('includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>