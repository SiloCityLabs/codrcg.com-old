<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	if (!empty($_GET['ID'])) {
		$classID = $_GET['ID'];
		require_once ('../includes/send/class/getClassInfo.php');
	} else {
		header ("location: ".'/'.MW_Folder."/includes/send/createClass.php");
		exit();
	}
	$seoArr['title'] = 'Class - '.MW_Title;
	$seoArr['desc'] = 'A handy utility to generate random classes for Call of duty 4 Modern Warfare. This adds a new level of fun to the game by generating random classes for you to enjoy';
	$seoArr['url'] = 'https://'.SYS_URL_PATH.'/'.MW_Folder.'/class/'.$classID;

	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Random Class</span>
								</a>
							</div>';
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<link rel="canonical" href="<?php echo $seoArr['url']; ?>">
	<div class="row" ng-init="ClassID = <?php echo $classID; ?>; Join_ID = '<?php echo $class['Join_ID']; ?>'">
		<div class="col s12">
			<div class='row'>
				<div class="col s12">
					<h1 class="text-center flex-text">"<?php echo $class['Name']; ?>"</h1>
					<?php require('../includes/pagesections/ads/Ad_top.php'); ?>
					<?php require('../includes/pagesections/dev_alert.php'); ?>
					<!-- Guns Section -->
					<div class="row text-center">
						<?php
							# Show Primary weapon layout
							gunLayout($class['Data'],'Primary');
							# Show Secondary or Overkill weapon layout
							if (isset($class['Data']['Overkill'])) {
								gunLayout($class['Data'],'Overkill');
							} else {
								gunLayout($class['Data'],'Secondary');
							}
						?>
					</div>
					<div class="divider" ng-cloak></div>
					<!-- Perks Section -->
					<div class="row text-center">
						<?php
							# Show perk layouts
							perkLayout($class['Data'],'1');
							perkLayout($class['Data'],'2');
							perkLayout($class['Data'],'3');
						?>
					</div>
					<div class="divider" ng-cloak></div>
					<!-- Equipment & Wildcards Section -->
					<div class="row text-center">
						<?php
							equipLayout($class['Data'],'Special_Grenade');
							extrasLayout($class['Data'],'Gamemode');
							extrasLayout($class['Data'],'Challenge');
						?>
					</div>
					<?php if (!empty($class['Data']['Melee'])) { ?>
						<div class="divider" ng-cloak></div>
						<!-- Melee -->
						<div class="row text-center">
							<?php gunLayout($class['Data'],'Melee','s12 m4 offset-m4'); ?>
						</div>
					<?php } ?>
					<div class="divider" ng-cloak></div>
					<?php require('../includes/pagesections/_cod/class/tiny_url.php'); ?>
				</div>
			</div>
		</div>
	</div>
<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>