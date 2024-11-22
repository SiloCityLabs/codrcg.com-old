<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	$seoArr['desc'] = 'A handy utility to generate random classes for Call of duty Modern Warfare 3. This adds a new level of fun to the game by generating random classes for you to enjoy';
	$seoArr['keywords'] = 'Call of duty, cod, random class generator, rcg, free, mp, multiplayer, call of duty random class generator, COD modern warfare 3 RCG, modern warfare 3, modern warfare 3 random class generator, infinity ward';

	$TotalClasses = getconfig ('Cached_MW3_Class_Count');
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<div class="row">
		<form name="myForm" class="col s12">
			<div class="row text-center">
				<div class="col s12 m9 l9">
					<h1>Modern Warfare 3 Random Class Generator</h1>
				</div>
			</div>
			<div class="row">
				<div class="col s12 m9 l9">
					<div id='top' class="text-center">
						<?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
						<?php require ('../includes/pagesections/dev_alert.php'); ?>
						<span>Designed to generate a random class for players to use in Call of Duty: Modern Warfare 3.</span><br>
						<span>Some Features of this class generator are:</span><br>
						<span>
							All Weapons, Attachments, Perks, Tacticals, Lethals &amp; Killstreaks are included.<br>
							Links to every class generated<br>
							Fully Customizable!<br>
						</span>
						<div>We have generated over <span id="classCount"><?php echo number_format ($TotalClasses); ?></span> random classes for our users.</div>
					</div>
					<div class="text-center">
						<a class="waves-effect waves-light btn green accent-4" href="/<?php echo MW3_Folder; ?>/class" ng-disabled='myForm.$invalid'>
							<i class="material-icons left">refresh</i>
							<span ng-show='myForm.$valid'>Roll Class</span>
							<span ng-show='myForm.$invalid'>Set Valid Player Level</span>
						</a>
					</div>
				</div>
				<div class="col s12 m3 l3 text-center">
					<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
					<div class="divider margin-bottom-10 margin-top-10"></div>
					<?php require_once ('../includes/pagesections/social/twitter_btn.php'); ?>
					<?php require_once ('../includes/pagesections/social/facebook_btn.php'); ?>
				</div>
			</div>
		</form>
	</div>
<?php require_once ('includes/pagesections/_bottom.php'); ?>