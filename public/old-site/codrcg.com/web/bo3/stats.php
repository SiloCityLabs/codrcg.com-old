<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	$seoArr['title'] = 'Stats - '.BO3_Title;
	$seoArr['desc'] = 'Stats page for our black ops 3 random class generator';
	$seoArr['keywords'] = 'Black ops 3 random class generator stats, stats';
	$seoArr['url'] = '//'.SYS_URL_PATH.'/'.BO3_Folder.'/stats';

	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Stats</span>
								</a>
							</div>';
	$gameAbbrev = 'BO3';
	$gameID = BO3_Game_ID;
	$gameName = 'Black Ops 3';
	$gameClass = 'orange-text text-accent-4';

	require_once ('../includes/send/_cod/stats/getStats.php');
?>
<?php require_once ('includes/pagesections/_top.php'); ?>

	<div class="row">
		<div class="col s12">
			<h1 class="text-center"><?php echo $gameName; ?> RCG Stats</h1>
			<?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
			<div class="divider"></div>
			<?php require ('../includes/pagesections/_cod/stats.php'); ?>
		</div>
	</div>
	<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>