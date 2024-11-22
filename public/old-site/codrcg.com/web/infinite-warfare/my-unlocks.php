<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);
	
	$seoArr['title'] = 'My Unlocks - '.IW_Title;
	$seoArr['desc'] = 'Where you select your perma unlocks from prestiging in call of duty infinite warfare.';
	$seoArr['keywords'] = 'COD infinite warfare, infinite warfare, infinity ward, twitch, youtube, unlocks';
	$seoArr['url'] = '//'.SYS_URL_PATH.'/'.IW_Folder.'/my-unlocks';
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<?php
		echo minify_builder ([
			'BASE' => '/'.IW_Folder.'/assets/scripts',
			'files' => [
				'pages/my-unlocks/main.controller.js',
				'pages/my-unlocks/main.service.js'
			]
		]);

	?>
	<div class="row" ng-controller='UnlockCtrl as myCtrl'>
		<div class="col s12">
			<h1 class="text-center">My Unlocks <i class="material-icons pointer" ng-click='unlockInfo = !unlockInfo;'>info</i></h1>
			<?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
			<div class="divider" ng-cloak></div>
			<br>
			<div class="col s10 offset-s1 text-center" ng-show='unlockInfo'>
				<!-- If user is not logged in -->
				<span ng-if='!isLoggedIn' ng-bind-html='NotLoggedInInfo'></span>
				<!-- If user is logged in -->
				<span ng-if='isLoggedIn' ng-bind-html='LoggedInInfo'></span>
				<br><br>
			</div>
			<form name="myForm" ng-hide='myCtrl.InitialLoad'>
				<div class="row">
					<div class="col m3 s6" ng-repeat='prestige in myCtrl.prestiges'>
						<label>Prestige {{::prestige}}</label>
						<select class="browser-default" ng-model="myCtrl.data.Unlock[prestige]" ng-options='item.Name group by item.TypeName for item in myCtrl.mergedEquip'>
							<option value="">None</option>
						</select>
					</div>
				</div>
				<div class="row">
					<div class="col s12">
						<div class="text-center">
							<a class="waves-effect waves-light btn yellow accent-2" ng-click='myCtrl.setUnlockInfo();' ng-disabled='myForm.$invalid'>
								<span class="grey-text text-darken-2">Save</span>
							</a>
						</div>
					</div>
				</div>
			</form>
			<div ng-show='myCtrl.InitialLoad'><?php require_once ('../includes/pagesections/pagination/loading_spinner.php'); ?></div>
		</div>
	</div>
	<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>