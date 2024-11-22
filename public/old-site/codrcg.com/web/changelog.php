<?php
	require('includes/includes.php');
	ob_start("sanitize_page");
	new Session(array('ALL'));
	$seoArr['title'] = SITE_NAME.' - Changelog';
	$seoArr['image'] = SITE_Image;
	$seoArr['desc'] = 'Codrcg changelog';
	$seoArr['keywords'] = 'call of duty, cod, rcg, codrcg, cod rcg, changelog';
	$seoArr['url'] = 'http://'.SYS_URL_PATH.'/changelog';
	$seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="http://codrcg.com/changelog" itemprop="url">
									<span itemprop="title">Changelog</span>
								</a>
							</div>';

?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<?php require ('includes/pagesections/ads/Ad_top.php'); ?>
	<div class="row">
		<div class="col s12">
			<h1 class="text-center">Changelog</h1>
			<div class='divider'></div>
			<?php require ('includes/pagesections/changelog/2021.php'); ?>
			<?php require ('includes/pagesections/changelog/2017.php'); ?>
			<?php require ('includes/pagesections/changelog/2016.php'); ?>
			<?php require ('includes/pagesections/changelog/2015.php'); ?>
		</div>
	</div>
	<?php require ('includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>
