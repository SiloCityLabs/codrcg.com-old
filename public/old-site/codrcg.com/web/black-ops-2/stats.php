<?php
	require('../includes/includes.php');
	ob_start("sanitize_page");
	new Session(['ALL']);

	$seoArr['title'] = 'Stats - '.BO2_Title;
	$seoArr['desc'] = 'Stats page for our black ops 2 random class generator';
	$seoArr['keywords'] = 'Black ops 2 random class generator stats, stats';
	$seoArr['url'] = '//'.SYS_URL_PATH.'/'.BO2_Folder.'/stats';

	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Stats</span>
								</a>
							</div>';
	$gameAbbrev = 'BO2';
	$gameID = BO2_Game_ID;
	$gameName = 'Black Ops 2';
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