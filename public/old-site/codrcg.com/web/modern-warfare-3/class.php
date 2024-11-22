<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	if (!empty($_GET['ID'])) {
		$classID = $_GET['ID'];
		require_once ('../includes/send/class/getClassInfo.php');
	} else {
		header ("location: ".'/'.MW3_Folder."/includes/send/createClass.php");
		exit();
	}
	$seoArr['title'] = 'Class - '.MW3_Title;
	$seoArr['desc'] = 'A handy utility to generate random classes for Call of duty Modern Warfare 3. This adds a new level of fun to the game by generating random classes for you to enjoy';
	$seoArr['url'] = 'https://'.SYS_URL_PATH.'/'.MW3_Folder.'/class/'.$classID;

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
					<div class="row text-center" ng-cloak>
						<?php gunLayout($class['Data'],'Primary'); ?>
						<?php
							if (isset($class['Data']['Overkill'])) {
								gunLayout($class['Data'],'Overkill');
							} else {
								gunLayout($class['Data'],'Secondary');
							}
						?>
					</div>
					<div class="divider" ng-cloak></div>
					<!-- Perks Section -->
					<div class="row text-center" ng-cloak>
						<?php perkLayout($class['Data'],'1'); ?>
						<?php perkLayout($class['Data'],'2'); ?>
						<?php perkLayout($class['Data'],'3'); ?>
					</div>
					<div class="divider" ng-cloak></div>
					<!-- Equipment & Wildcards Section -->
					<div class="row text-center" ng-cloak>
						<?php equipLayout($class['Data'],'Lethal',1,'s6'); ?>
						<?php equipLayout($class['Data'],'Tactical',1,'s6'); ?>
					</div>
					<div class="divider"></div>

					<div class="row text-center">
						<h3>Strike Package: <?php echo $class['Data']['StrikePackage']; ?></h3>
						<?php
							if (isset($class['Data']['Killstreaks'])) {
								foreach($class['Data']['Killstreaks'] as $value){
									echo "<div class='col s4'>
											<span>$value[Name] | $value[Points]</span>
										</div>";
								}
							} else if (isset($class['Data']['S_Perks'])) {
								$kills = 2;
								foreach($class['Data']['S_Perks'] as $value){
									echo "<div class='col s6 m3'>
											<span>$value[Name] | $kills Kills</span>
										</div>";
									$kills += 2;
								}
								echo "<div class='col s6 m3'>
										<span>All Perks | 8 Kills</span>
									</div>";
							}
						?>
					</div>

					<?php if (isset($class['Data']['Gamemode']) || isset($class['Data']['Challenge'])): ?>
						<div class="divider" ng-cloak></div>
						<div class="row text-center" ng-cloak>
							<?php
								extrasLayout($class['Data'],'Gamemode','s6');
								extrasLayout($class['Data'],'Challenge','s6');
							?>
						</div>
					<?php endif; ?>
					<div class="divider" ng-cloak></div>
					<?php require('../includes/pagesections/_cod/class/tiny_url.php'); ?>
				</div>
			</div>
		</div>
	</div>
<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>