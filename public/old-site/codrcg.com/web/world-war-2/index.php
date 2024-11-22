<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	$seoArr['desc'] = 'A handy utility to generate random classes for Call of duty: World War 2. This adds a new level of fun to the game by generating random classes for you to enjoy';
	$seoArr['keywords'] = 'Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
		free, mp, multiplayer, call of duty random class generator, COD World War 2 RCG, COD Blops RCG, blops random class generator,
		blops, World War 2, ops rcg, ops random class generator, World War 2 random class generator, zombies, treyarch zombies,
		World War 2 zombies, World War 2 zombies, World War 2 rcg, World War 2 random class generator
		COD World War II RCG, World War II, World War II random class generator,
		World War II zombies, World War II zombies, World War II rcg, World War II random class generator';


	$TotalClasses = getconfig ('Cached_WW2_Class_Count');
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<div class="row">
		<form name="myForm" class="col s12">
			<div class="row text-center">
				<div class="col s12 m9 l9">
					<h1>World War II Random Class Generator</h1>
				</div>
			</div>
			<div class="row">
				<div class="col s12 m9 l9">
					<div class="col s12 m9 l9">
						<div id='top' class="text-center">
							<?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
							<?php require('../includes/pagesections/dev_alert.php'); ?>
							<h2 class="smallH2">Designed to generate a random class for players to use in World War II.</h2>
							<span>Some Features of this class generator are:</span><br>
							<span>
								All Weapons, Attachments, Divisions, Basic Trainings, Lethals, Tacticals &amp; Killstreaks.<br>
								Links to every class generated<br>
								Fully Customizable!<br>
							</span>
							<div>We have generated over <span id="classCount"><?php echo number_format($TotalClasses); ?></span> random classes for our users.</div>
						</div>
						<div class="text-center">
							<a class="waves-effect waves-light btn cod WWII" href="/<?php echo WW2_Folder; ?>/class" ng-disabled='myForm.$invalid'>
								<i class="material-icons left">refresh</i>
								<span ng-show='myForm.$valid'>Roll Class</span>
								<span ng-show='myForm.$invalid'>Set Valid Player Level</span>
							</a>
						</div>
					</div>
				</div>
				<div class="col s12 m3 l3 text-center">
					<?php require('../includes/pagesections/ads/Ad_bottom.php'); ?>
					<div class="divider margin-bottom-10 margin-top-10"></div>
					<?php require_once('../includes/pagesections/social/twitter_btn.php'); ?>
					<?php require_once('../includes/pagesections/social/facebook_btn.php'); ?>
				</div>
			</div>
		</form>
	</div>
<?php require_once ('includes/pagesections/_bottom.php'); ?>