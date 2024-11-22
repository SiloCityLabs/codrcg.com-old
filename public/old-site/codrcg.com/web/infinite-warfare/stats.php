<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	$seoArr['title'] = 'Stats - '.IW_Title;
	$seoArr['desc'] = 'Stats page for our infinite warfare random class generator';
	$seoArr['keywords'] = 'Infinite Warfare random class generator stats, stats';
	$seoArr['url'] = '//'.SYS_URL_PATH.'/'.IW_Folder.'/stats';

	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Stats</span>
								</a>
							</div>';
	$gameAbbrev = 'IW';
	$gameID = IW_Game_ID;
	$gameName = 'Infinite Warfare';
	$gameClass = 'yellow accent-2 black-text';

	require_once ('../includes/send/_cod/stats/getStats.php');
?>
<?php require_once ('includes/pagesections/_top.php'); ?>

	<div class="row">
		<div class="col s12">
			<h1 class="text-center">Infinite Warfare RCG Stats</h1>
			<?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
			<div class="divider"></div>
			<?php require ('../includes/pagesections/_cod/stats.php'); ?>
		</div>
	</div>
	<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>