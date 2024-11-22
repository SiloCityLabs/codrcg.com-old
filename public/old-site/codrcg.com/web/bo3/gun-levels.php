<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	$seoArr['title'] = 'Gun Levels - '.BO3_Title;
	$seoArr['desc'] = 'Where you set your gun levels. This will be used when rolling attachments for guns.';
	$seoArr['keywords'] = 'COD Black Ops 3, COD Blops 3, blops 3, black ops 3, ops 3, treyarch, twitch, youtube, gun levels';
	$seoArr['url'] = '//'.SYS_URL_PATH.'/'.BO3_Folder.'/gun-levels';

	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Gun Levels</span>
								</a>
							</div>';
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<?php
		echo minify_builder ([
			'BASE' => '/'.BO3_Folder.'/assets/scripts',
			'files' => [
				'pages/gun-levels/main.controller.js',
				'pages/gun-levels/main.service.js'
			]
		]);
	?>
	<div class="row" ng-controller='GunCtrl as myCtrl'>
		<div class="col s12">
			<h1 class="text-center">Gun Levels <i class="material-icons pointer" ng-click='unlockInfo = !unlockInfo;'>info</i></h1>
			<?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
			<div class="divider" ng-cloak></div>
			<p class="text-center">If no level is set on a gun it will be assumed that you have a max level on that gun.</p>
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
					<div class="col m3 s6" ng-repeat='gun in myCtrl.Guns'>
						<label>{{::gun.Name}}</label>
						<select class="browser-default" ng-model="myCtrl.data[gun.ID]">
							<option value="" class="display-none">Choose a level</option>
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
							<option value="16">16</option>
							<option value="17">17</option>
							<option value="18">18</option>
						</select>
					</div>
				</div>
				<div class="row">
					<div class="col s12">
						<div class="text-center">
							<a class="waves-effect waves-light btn orange accent-4" ng-click='myCtrl.setInfo();' ng-disabled='myForm.$invalid'>Save</a>
						</div>
					</div>
				</div>
			</form>
			<div ng-show='myCtrl.InitialLoad'><?php require_once ('../includes/pagesections/pagination/loading_spinner.php'); ?></div>
		</div>
	</div>
	<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>