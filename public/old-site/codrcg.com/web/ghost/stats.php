<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	$seoArr['title'] = 'Stats - '.GH_Title;
	$seoArr['desc'] = 'Stats page for our ghosts random class generator';
	$seoArr['keywords'] = 'Ghost random class generator stats, stats';
	$seoArr['url'] = '//'.SYS_URL_PATH.'/'.GH_Folder.'/stats';

	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Stats</span>
								</a>
							</div>';
	$gameAbbrev = 'GH';
	$gameID = GH_Game_ID;
	$gameName = 'Black ops 2';
	$gameClass = 'orange-text text-accent-4';

	require_once ('../includes/send/_cod/stats/getStats.php');
?>
<?php require_once ('includes/pagesections/_top.php'); ?>

	<div class="row">
		<div class="col s12">
			<h1 class="text-center">Ghost RCG Stats</h1>
			<?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
			<div class="divider"></div>
			<?php require ('../includes/pagesections/_cod/stats.php'); ?>
		</div>
	</div>
	<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>