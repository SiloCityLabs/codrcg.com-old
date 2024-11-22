<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	if (!empty($_GET['ID'])) {
		$classID = $_GET['ID'];
		require_once ('../includes/send/class/getClassInfo.php');
	} else {
		header("location: " . '/' . WW2_Folder . "/includes/send/createClass.php");
		exit();
	}
	
	$seoArr['title'] = 'Class - '.WW2_Title;
	$seoArr['desc'] = 'A handy utility to generate random classes for Call of duty: World War II. This adds a new level of fun to the game by generating random classes for you to enjoy';
	$seoArr['keywords'] = 'Call of duty, random class generator, multiplayer, call of duty random class generator, COD World War II RCG,
		world war II, world war II random class generator, zombies, sledgehammer';
	$seoArr['url'] = 'https://'.SYS_URL_PATH.'/'.WW2_Folder.'/class/'.$classID;

	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Random Class</span>
								</a>
							</div>';
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<div class="row" ng-init="ClassID = <?php echo $classID; ?>; Join_ID = '<?php echo $class['Join_ID']; ?>';">
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
					<div class="divider"></div>
					<!-- Perks Section -->
					<div class="row text-center">
						<?php
							# Show perk layouts
							perkLayout($class['Data'],'Division','s6');
							perkLayout($class['Data'],'Basic_Training','s6');
						?>
					</div>
					<div class="divider"></div>
					<!-- Equipment & Wildcards Section -->
					<div class="row text-center">
						<?php
							# Show tactician or lethal layout
							if(isset($class['Data']['Tactician'])) {
								equipLayout($class['Data'],'Tactician',$class['Data']['Frame']['Tactician'],'s6');
							} else {
								$x2 = (isset($class['Data']['DangerClose']) ? 2:0);
								equipLayout($class['Data'],'Lethal',$x2,'s6');
							}
							# Show tactical layout
							$x2 = (empty($class['Data']['Frame']['Tactical']) ? 0 : $class['Data']['Frame']['Tactical']);
							equipLayout($class['Data'],'Tactical',$x2,'s6');
						?>
					</div>
					<!-- Check for killstreaks -->
					<?php if (isset( $class[ 'Data' ][ 'Killstreaks' ] )): ?>
						<div class="divider"></div>
						<div class="row text-center">
							<?php streaksLayout($class['Data'],'Killstreaks'); ?>
						</div>
					<?php endif; ?>

					<!-- Check for class extras -->
					<?php if (isset($class['Data']['Specialist']) || isset($class['Data']['Gamemode']) || isset($class['Data']['Challenge'])): ?>
						<div class="divider"></div>
						<div class="row text-center">
							<?php
								extrasLayout($class['Data'],'Specialist');
								extrasLayout($class['Data'],'Gamemode');
								extrasLayout($class['Data'],'Challenge');
							?>
						</div>
					<?php endif; ?>
					<div class="divider"></div>
					<?php require('../includes/pagesections/_cod/class/tiny_url.php'); ?>
				</div>
			</div>
		</div>
	</div>
	<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>