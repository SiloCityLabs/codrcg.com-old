<?php
	require('includes/includes.php');
	ob_start("sanitize_page");
	new Session(array('ALL'));
	
	$seoArr['title'] = 'Privacy Policy - '.SITE_NAME;
	$seoArr['desc'] = 'This is the privacy policy for codrcg.';
	$seoArr['keywords'] = 'call of duty, cod, rcg, codrcg, cod rcg, privacy policy';
	$seoArr['url'] = "http://".SYS_URL_PATH."/privacy";
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<h1 class="text-center">Privacy Policy</h1>
	<div class="divider"></div>
	<?php require('includes/pagesections/privacypolicy.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>