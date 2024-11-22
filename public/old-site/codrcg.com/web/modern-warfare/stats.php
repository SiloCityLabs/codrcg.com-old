<?php
    require ('../includes/includes.php');
    ob_start ("sanitize_page");
    new Session(['ALL']);
	
    $seoArr['title'] = 'Stats - '.MW_Title;
    $seoArr['desc'] = 'Stats page for our call of duty 4 modern warfare random class generator';
    $seoArr['keywords'] = 'Modern warfare random class generator stats, stats';
    $seoArr['url'] = '//'.SYS_URL_PATH.'/'.MW_Folder.'/stats';

    $seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Stats</span>
								</a>
							</div>';
	$gameAbbrev = 'MW';
	$gameID = MW_Game_ID;
	$gameName = 'Modern Warfare';
	$gameClass = 'green-text text-accent-4';

    require_once ('../includes/send/_cod/stats/getStats.php');
?>
<?php require_once ('includes/pagesections/_top.php'); ?>

    <div class="row">
        <div class="col s12">
            <h1 class="text-center">Call of Duty 4: Modern Warfare RCG Stats</h1>
            <?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
            <div class="divider"></div>
			<?php require ('../includes/pagesections/_cod/stats.php'); ?>
        </div>
    </div>
<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>