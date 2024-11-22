<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	$seoArr['title'] = 'My Unlocks - '.BO2_Title;
	$seoArr['desc'] = 'Where you select your perma unlocks from prestiging in call of duty black ops 2.';
	$seoArr['keywords'] = 'COD Black Ops 2, COD Blops 2, blops 2, black ops 2, ops 2, treyarch, twitch, youtube, unlocks';
	$seoArr['url'] = '//'.SYS_URL_PATH.'/'.BO2_Folder.'/my-unlocks';
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<?php
		echo minify_builder ([
			'BASE' => '/'.BO2_Folder.'/assets/scripts',
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
							<a class="waves-effect waves-light btn orange accent-4" ng-click='myCtrl.setUnlockInfo();' ng-disabled='myForm.$invalid'>Save</a>
						</div>
					</div>
				</div>
			</form>
			<div ng-show='myCtrl.InitialLoad'><?php require_once ('../includes/pagesections/pagination/loading_spinner.php'); ?></div>
		</div>
	</div>
	<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>